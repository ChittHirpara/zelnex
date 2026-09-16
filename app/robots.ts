import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://zelnexpharma.com/sitemap.xml",
    host: "https://zelnexpharma.com",
  };
}
