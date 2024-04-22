import {
  CardHeader as NextUICardHeader,
  type HTMLNextUIProps,
} from '@nextui-org/react';
import React from 'react';

export type CardHeaderProps = HTMLNextUIProps & {};

export default function CardHeader(props: CardHeaderProps) {
  const { children, ...rest } = props;
  return <NextUICardHeader {...rest}>{children}</NextUICardHeader>;
}
