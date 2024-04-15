import { useUserAgent } from 'next-useragent';
import type { FC } from 'react';

function useTemplateSwitch<T>(
  PC: FC<T>,
  SP: FC<T>,
  ua: string,
  isMobile: boolean,
) {
  const uaStr = typeof window !== 'undefined' ? window.navigator.userAgent : ua;
  const userAgent = useUserAgent(uaStr);

  if (isMobile || (userAgent && userAgent.isMobile)) {
    return SP;
  }
  return PC;
}

export default useTemplateSwitch;
