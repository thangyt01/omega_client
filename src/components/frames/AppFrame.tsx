import type { FC, ReactNode } from 'react';

import useTemplateSwitch from '@/libs/use-template';

import AppFramePc from './AppFrame.pc';
import AppFrameSp from './AppFrame.sp';

export type AppFrameProps = {
  error?: ReactNode | null;
  queryLoading?: boolean;
  mutationLoading?: boolean;
  children?: React.ReactNode;
};

const AppFrame: FC<AppFrameProps> = (props) => {
  return useTemplateSwitch(AppFramePc, AppFrameSp)(props);
};

export default AppFrame;
