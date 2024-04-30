import type { FC, PropsWithChildren } from 'react';

import AppFrame from '@/components/frames/AppFrame';

const PublicLayout: FC<PropsWithChildren> = (props) => {
  return <AppFrame>{props.children}</AppFrame>;
};

export default PublicLayout;
