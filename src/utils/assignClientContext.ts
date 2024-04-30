import type { ClientSharedServerContext } from '@/@types/server';

export const assignClientContext = <T extends ClientSharedServerContext>(
  props: Partial<T>,
) =>
  ({
    isMobile: props.isMobile || false,
    ua: props.ua || '',
    locale: props.locale || 'vi',
  }) as T;
