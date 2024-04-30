import type { CheckboxProps as NextUICheckboxProps } from '@nextui-org/react';
import { Checkbox as NextUICheckbox } from '@nextui-org/react';
import type { FC } from 'react';

export type CheckboxProps = NextUICheckboxProps;

const Checkbox: FC<CheckboxProps> = (props: CheckboxProps) => {
  return <NextUICheckbox {...props} />;
};

export default Checkbox;
