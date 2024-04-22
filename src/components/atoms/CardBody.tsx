import {
  CardBody as NextUICardBody,
  type HTMLNextUIProps,
} from '@nextui-org/react';
import React from 'react';

export type CardBodyProps = HTMLNextUIProps & {};

export default function CardBody(props: CardBodyProps) {
  const { children, ...rest } = props;
  return <NextUICardBody {...rest}>{children}</NextUICardBody>;
}
