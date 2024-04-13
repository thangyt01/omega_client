import type { FC } from 'react';
import { Fragment } from 'react';

import Footer from '../organisms/Footer.sp';
import Header from '../organisms/Header.sp';
import type { AppFrameProps } from './AppFrame';

const AppFrame: FC<AppFrameProps> = (props: AppFrameProps) => {
  const { children } = props;
  return (
    <>
      <Header type="normal" />
      <main>{children}</main>
      <Footer type="normal" />
    </>
  );
};

export default AppFrame;
