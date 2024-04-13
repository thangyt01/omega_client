import type { MetadataRoute } from 'next';

import { AppConfig } from '@/configs/AppConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${AppConfig.baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // Add more URLs here
  ];
}
