import { FC, Fragment } from 'react';
import Footer from '../organisms/Footer.pc';
import { AppFrameProps } from './AppFrame';

const AppFrame: FC<AppFrameProps> = (props: AppFrameProps) => {
  const { children } = props;
  return (
    <Fragment>
      <header></header>
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default AppFrame;
