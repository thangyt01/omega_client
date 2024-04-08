import { createContext, useContext, FunctionComponent, ReactNode } from 'react';

const UaContext = createContext({
  ua: '',
  isMobile: false,
});

export type UaProps = {
  ua: string;
  isMobile: boolean;
  children?: ReactNode;
};

const UaProvider: FunctionComponent<UaProps> = ({ ua, isMobile, children }) => {
  return (
    <UaContext.Provider value={{ ua, isMobile }}>{children}</UaContext.Provider>
  );
};

const useUaContext = () => useContext(UaContext);

export { UaContext, UaProvider, useUaContext };
