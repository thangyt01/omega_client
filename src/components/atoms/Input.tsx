import type { InputProps as NextUIInputProps } from '@nextui-org/react';
import { Input as NextUIInput } from '@nextui-org/react';
import type { FC } from 'react';

export type InputProps = NextUIInputProps;

const Input: FC<InputProps> = (props: InputProps) => {
  return <NextUIInput {...props} />;
};

export default Input;
