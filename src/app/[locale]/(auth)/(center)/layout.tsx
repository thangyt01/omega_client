import type { FC, PropsWithChildren } from 'react';

import AuthFrame from '@/components/frames/AuthFrame';

const AuthLayout: FC<PropsWithChildren> = (props) => {
  return <AuthFrame>{props.children}</AuthFrame>;
};

export default AuthLayout;
