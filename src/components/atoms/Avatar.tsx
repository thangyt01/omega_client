import type { AvatarProps as NextUIAvatarProps } from '@nextui-org/react';
import { Avatar as NextUIAvatar } from '@nextui-org/react';
import type { FC } from 'react';

export type AvatarProps = NextUIAvatarProps;

const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  return <NextUIAvatar {...props} />;
};

export default Avatar;
