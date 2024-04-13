import type { ButtonProps as NextUIButtonProps } from '@nextui-org/react';
import { Button as NextUIButton } from '@nextui-org/react';
import type { FC } from 'react';

export type ButtonProps = NextUIButtonProps;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <NextUIButton {...props} />;
};

export default Button;
