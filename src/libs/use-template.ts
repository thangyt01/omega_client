import { useUserAgent } from 'next-useragent';
import { FC } from 'react';
import { useUaContext } from './ua-context';

function useTemplateSwitch<T>(pc: FC<T>, sp: FC<T>) {
  const uaFromContext = useUaContext();
  const uaStr =
    typeof window !== 'undefined'
      ? window.navigator.userAgent
      : uaFromContext.ua;
  const ua = useUserAgent(uaStr);

  if (uaFromContext.isMobile || (ua && ua.isMobile)) {
    return sp;
  } else {
    return pc;
  }
}

export default useTemplateSwitch;
