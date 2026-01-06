import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik alan var." }, { status: 400 });
    }

    // --- GMAIL AYARLARI ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // --- GÜNCELLENMİŞ E-POSTA TASARIMI (DARK MODE) ---
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🚀 Portfolyodan Yeni Mesaj: ${name}`,
      text: `Gönderen: ${name} (${email})\n\nMesaj:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: 'Inter', sans-serif; background-color: #f3f4f6; margin: 0; padding: 40px 20px;">
          
          <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); overflow: hidden;">
            
            <div style="background-color: #f59e0b; height: 8px; width: 100%;"></div>

            <div style="padding: 40px;">
              <h2 style="margin-top: 0; color: #111827; font-size: 22px;">📬 Yeni Bildirim</h2>
              <p style="color: #6b7280; font-size: 15px;">Web sitenizden yeni bir form gönderildi.</p>

              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding-bottom: 15px; color: #9ca3af; font-size: 12px; font-weight: 700; width: 80px;">KİMDEN</td>
                  <td style="padding-bottom: 15px; color: #111827; font-size: 15px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding-bottom: 15px; color: #9ca3af; font-size: 12px; font-weight: 700;">E-POSTA</td>
                  <td style="padding-bottom: 15px; color: #2563eb; font-size: 15px;">${email}</td>
                </tr>
              </table>

              <p style="color: #9ca3af; font-size: 12px; font-weight: 700; margin-top: 10px;">MESAJ</p>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 10px; color: #374151; font-size: 15px; line-height: 1.6; border: 1px solid #e5e7eb;">
                ${message}
              </div>

              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #f59e0b; color: #000; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: bold; font-size: 14px;">Hemen Cevapla</a>
              </div>
            </div>
          </div>

        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Başarılı!" }, { status: 200 });
  } catch (error) {
    console.error("Mail Hatası:", error);
    return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 500 });
  }
}
