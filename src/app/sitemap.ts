import type { MetadataRoute } from "next";
import { siteData } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteData.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}