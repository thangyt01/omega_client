import type { CardProps as NextUICardProps } from '@nextui-org/react';
import { Card as NextUICard } from '@nextui-org/react';
import React from 'react';

export type CardProps = NextUICardProps & {};

export default function Card(props: CardProps) {
  const { children, ...rest } = props;
  return <NextUICard {...rest}>{children}</NextUICard>;
}
