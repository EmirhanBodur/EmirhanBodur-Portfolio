import "server-only";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// --- 1. AYARLAR ---
// .env.local dosyasındaki isimlendirmeye uyumlu hale getirdim
const space = process.env.CONTENTFUL_SPACE_ID; // .env.local'daki isme dikkat
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    "Contentful API anahtarları eksik! .env.local dosyasını kontrol et."
  );
}

const client = createClient({ space, accessToken });

// --- 2. YARDIMCI FONKSİYONLAR ---

function getAssetUrl(asset) {
  const url = asset?.fields?.file?.url;
  if (!url) return null;
  return url.startsWith("http") ? url : `https:${url}`;
}

export function RichText({ content, options }) {
  if (!content) return null;
  return <>{documentToReactComponents(content, options)}</>;
}

// --- 3. VERİ ÇEKME FONKSİYONLARI ---

// ★ HAKKIMDA (Düzeltildi: 'icerik' alanını okuyor)
export async function getAboutData() {
  try {
    const response = await client.getEntries({
      content_type: "hakkimda", // Contentful ID (küçük harf)
      limit: 1,
    });

    const item = response.items[0];
    if (!item) return null;

    return {
      // BURASI ÇOK ÖNEMLİ: Contentful'daki alan adın "icerik" olduğu için bunu eşleştirdik
      body: item.fields.icerik,

      title: item.fields.title || item.fields.baslik || "Hakkımda",
      subtitle: item.fields.subtitle,
      avatarUrl: getAssetUrl(item.fields.avatar || item.fields.photo),
    };
  } catch (error) {
    console.warn("getAboutData hatası:", error.message);
    return null;
  }
}

// ★ YETENEKLER
export async function getSkills() {
  try {
    const response = await client.getEntries({
      content_type: "skill",
      limit: 100,
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      ...item.fields,
    }));
  } catch (error) {
    console.warn("getSkills hatası:", error.message);
    return [];
  }
}

// ★ EĞİTİM
export async function getEducationData() {
  try {
    const response = await client.getEntries({
      content_type: "education",
      // Güncelleme tarihine göre sırala (En son düzenlediğin en üstte çıksın)
      order: "-sys.updatedAt",
    });

    return response.items.map((item) => ({
      id: item.sys.id,
      school: item.fields.school,
      degree: item.fields.degree,
      date: item.fields.date,
      description: item.fields.description,
    }));
  } catch (error) {
    console.warn("getEducationData hatası:", error.message);
    return [];
  }
}

// ★ SOSYAL MEDYA LİNKLERİ (İstediğin ekleme burası)
export async function getSocialLinks() {
  try {
    const response = await client.getEntries({
      content_type: "sosyalMedyaLinki",
      limit: 1,
    });

    const item = response.items[0];
    if (!item) return null;

    // Sadece gerekli alanları döndür
    return {
      github: item.fields.github,
      linkedin: item.fields.linkedin,
      twitter: item.fields.twitter,
      mail: item.fields.mail || item.fields.email,
      website: item.fields.website,
    };
  } catch (error) {
    console.warn("getSocialLinks hatası:", error.message);
    return null;
  }
}

// ★ DENEYİM (Experience)
export async function getExperienceData() {
  try {
    const response = await client.getEntries({
      content_type: "experience",
      order: "-sys.createdAt",
    });

    return response.items.map((item) => ({
      role: item.fields.companyRole,
      company: item.fields.companyTitle,
      duration: item.fields.companyDuration,
      description: item.fields.companyDescription,
      logoUrl: getAssetUrl(item.fields.companyLogo),
    }));
  } catch (error) {
    console.warn("getExperienceData hatası:", error.message);
    return [];
  }
}

export default client;
