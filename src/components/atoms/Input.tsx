import type { InputProps as NextUIInputProps } from '@nextui-org/react';
import { Input as NextUIInput } from '@nextui-org/react';
import React from 'react';

export type InputProps = NextUIInputProps & {};

export default function Input(props: InputProps) {
  return <NextUIInput {...props} />;
}
