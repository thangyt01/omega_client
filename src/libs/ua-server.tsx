import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

import type { UaContextType } from '@/libs/ua.type';

export const isMobileDevice = (): UaContextType => {
  if (typeof process === 'undefined') {
    throw new Error(
      '[Server method] you are importing a server-only module outside of server',
    );
  }

  const { get } = headers();
  const ua = get('user-agent') ?? '';

  const device = new UAParser(ua || '').getDevice();

  return {
    isMobile: device.type === 'mobile',
    ua,
  };
};
