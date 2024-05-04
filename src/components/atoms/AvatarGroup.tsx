import type { AvatarGroupProps as NextUIAvatarGroupProps } from '@nextui-org/react';
import { AvatarGroup as NextUIAvatarGroup } from '@nextui-org/react';

export type AvatarGroupProps = NextUIAvatarGroupProps;

function AvatarGroup(props: AvatarGroupProps): JSX.Element {
  return <NextUIAvatarGroup {...props} />;
}

export default AvatarGroup;
