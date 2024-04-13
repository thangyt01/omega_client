'use client';

import type { FC } from 'react';
import { createContext, useContext, useMemo } from 'react';

import type { UaContextType, UaProps } from './ua.type';

const UaContext = createContext<UaContextType>({
  ua: '',
  isMobile: false,
});

const UaProvider: FC<UaProps> = ({ ua, isMobile, children }) => {
  const contextValue = useMemo(() => ({ ua, isMobile }), [ua, isMobile]);

  return (
    <UaContext.Provider value={contextValue}>{children}</UaContext.Provider>
  );
};

const useUaContext = () => useContext(UaContext);

export { UaContext, UaProvider, useUaContext };
