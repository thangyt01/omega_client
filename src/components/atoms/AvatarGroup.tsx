import type { AvatarGroupProps as NextUIAvatarGroupProps } from '@nextui-org/react';
import { AvatarGroup as NextUIAvatarGroup } from '@nextui-org/react';
import type { FC } from 'react';

export type AvatarGroupProps = NextUIAvatarGroupProps;

const AvatarGroup: FC<AvatarGroupProps> = (props: AvatarGroupProps) => {
  return <NextUIAvatarGroup {...props} />;
};

export default AvatarGroup;
