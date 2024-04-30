import type { FC } from 'react';

import Breadcrumbs, { type BreadcrumbListItem } from '../atoms/Breadcrumbs';
import SelectLanguage from '../molecules/SelectLanguage';
import Footer from '../organisms/Footer.sp';
import type { AuthFrameProps } from './AuthFrame';

const AuthFrame: FC<AuthFrameProps> = (props: AuthFrameProps) => {
  const { children } = props;

  const breadcrumbListItems: Array<BreadcrumbListItem> = [
    {
      title: 'Omega',
      to: `/`,
    },
    {
      title: 'Sign In',
      to: `/sign-in`,
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between px-10 py-4">
        <Breadcrumbs breadcrumbListItems={breadcrumbListItems} />
        <SelectLanguage />
      </div>
      <main>{children}</main>
      <Footer type="register" />
    </>
  );
};

export default AuthFrame;
