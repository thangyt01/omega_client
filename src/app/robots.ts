import type { MetadataRoute } from 'next';

import { AppConfig } from '@/configs/AppConfig';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${AppConfig.baseUrl}/sitemap.xml`,
  };
}
