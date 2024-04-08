import { FC } from 'react';
import {
  AvatarGroupProps as NextUIAvatarGroupProps,
  AvatarGroup as NextUIAvatarGroup,
} from '@nextui-org/react';

export type AvatarGroupProps = NextUIAvatarGroupProps;

const AvatarGroup: FC<AvatarGroupProps> = (props: AvatarGroupProps) => {
  return <NextUIAvatarGroup {...props} />;
};

export default AvatarGroup;
