import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = "https://makas-academie.vercel.app/";

  return [
    {
      url: `${url}/`,
      lastModified: new Date(),
    },
    {
      url: `${url}/formations`,
      lastModified: new Date(),
    },
    {
      url: `${url}/a-propos`,
      lastModified: new Date(),
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
    },
  ];
}