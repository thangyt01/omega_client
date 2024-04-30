import type { FC, ReactNode } from 'react';

import useTemplateSwitch from '@/libs/use-template';

import AuthFramePc from './AuthFrame.pc';
import AuthFrameSp from './AuthFrame.sp';

export type AuthFrameProps = {
  error?: ReactNode | null;
  queryLoading?: boolean;
  mutationLoading?: boolean;
  children?: React.ReactNode;
};

const AuthFrame: FC<AuthFrameProps> = (props) => {
  return useTemplateSwitch(AuthFramePc, AuthFrameSp)(props);
};

export default AuthFrame;
