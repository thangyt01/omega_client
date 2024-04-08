import {
  AvatarProps as NextUIAvatarProps,
  Avatar as NextUIAvatar,
} from '@nextui-org/react';
import { FC } from 'react';

export type AvatarProps = NextUIAvatarProps;

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  return <NextUIAvatar {...props} />;
};

export default Avatar;
