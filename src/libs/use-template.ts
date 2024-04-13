import { useUserAgent } from 'next-useragent';
import type { FC } from 'react';

function useTemplateSwitch<T>(
  pc: FC<T>,
  sp: FC<T>,
  ua: string,
  isMobile: boolean,
) {
  const uaStr = typeof window !== 'undefined' ? window.navigator.userAgent : ua;
  const userAgent = useUserAgent(uaStr);

  if (isMobile || (userAgent && userAgent.isMobile)) {
    return sp;
  }
  return pc;
}

export default useTemplateSwitch;
