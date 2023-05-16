import { createClient } from "contentful";

  export async function getArticles() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
      });
    const res = await client.getEntries({ content_type: "aktualnoci" });
    return res.items;
  }