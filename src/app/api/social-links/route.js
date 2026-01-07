import { NextResponse } from "next/server";
import { createClient } from "contentful";

export async function GET() {
  try {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      return NextResponse.json(
        { error: "Contentful environment variables missing" },
        { status: 500 }
      );
    }

    const client = createClient({
      space: space,
      accessToken: accessToken,
    });

    const response = await client.getEntries({
      content_type: "sosyalMedyaLinki",
      limit: 1,
    });

    if (!response.items || response.items.length === 0) {
      return NextResponse.json(
        { error: "No social links found" },
        { status: 404 }
      );
    }

    return NextResponse.json(response.items[0].fields);
  } catch (error) {
    console.error("Error fetching social links:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
