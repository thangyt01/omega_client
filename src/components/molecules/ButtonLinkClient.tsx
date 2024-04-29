'use client';

import { Button } from '@nextui-org/react';
import type { FC } from 'react';

import type { ButtonProps } from '../atoms/Button';
import Link from '../atoms/Link';

export type ButtonLinkClientProps = ButtonProps;

const ButtonLinkClient: FC<ButtonLinkClientProps> = (props) => {
  return <Button as={Link} {...props} />;
};

export default ButtonLinkClient;
