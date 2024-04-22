import type { CheckboxProps as NextUICheckboxProps } from '@nextui-org/react';
import { Checkbox as NextUICheckbox } from '@nextui-org/react';
import React from 'react';

export type CheckboxProps = NextUICheckboxProps & {};

export default function Checkbox(props: CheckboxProps) {
  const { children, ...rest } = props;
  return <NextUICheckbox {...rest}>{children}</NextUICheckbox>;
}
