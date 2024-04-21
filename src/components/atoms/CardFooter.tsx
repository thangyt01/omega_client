import {
  CardFooter as NextUICardFooter,
  type HTMLNextUIProps,
} from '@nextui-org/react';
import React from 'react';

export type CardFooterProps = HTMLNextUIProps & {};

export default function CardFooter(props: CardFooterProps) {
  const { children, ...rest } = props;
  return <NextUICardFooter {...rest}>{children}</NextUICardFooter>;
}
