import type { FC, ReactNode } from 'react';

import type { UaProps } from '@/libs/ua.type';
import useTemplateSwitch from '@/libs/use-template';

import AppFramePc from './AppFrame.pc';
import AppFrameSp from './AppFrame.sp';

export type AppFrameProps = {
  error?: ReactNode | null;
  queryLoading?: boolean;
  mutationLoading?: boolean;
  children?: React.ReactNode;
} & UaProps;

const AppFrame: FC<AppFrameProps> = (props) => {
  const { ua, isMobile } = props;
  return useTemplateSwitch(AppFramePc, AppFrameSp, ua, isMobile)(props);
};

export default AppFrame;
