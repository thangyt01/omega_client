import type { SelectProps as NextUISelectProps } from '@nextui-org/react';
import { Select as NextUISelect } from '@nextui-org/react';
import type { FC } from 'react';

export type SelectProps = NextUISelectProps;

const Select: FC<SelectProps> = (props: SelectProps) => {
  return <NextUISelect {...props} />;
};

export default Select;
