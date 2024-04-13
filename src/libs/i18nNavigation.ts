import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { AppConfig } from '@/configs/AppConfig';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  locales: AppConfig.locales,
});
