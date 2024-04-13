import type React from 'react';

export type UaProps = {
  children?: React.ReactNode;
  ua: string;
  isMobile: boolean;
};

export type UaContextType = Pick<UaProps, 'ua' | 'isMobile'>;
