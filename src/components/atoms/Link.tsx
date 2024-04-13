import type { LinkProps as NextUILinkProps } from '@nextui-org/react';
import { Link as NextUILink } from '@nextui-org/react';
import type { FC } from 'react';

export type LinkProps = NextUILinkProps;

const Link: FC<LinkProps> = (props) => {
  return <NextUILink {...props} />;
};

export default Link;
