import { FC } from 'react';
import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
} from '@nextui-org/react';

export type ButtonProps = NextUIButtonProps;

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <NextUIButton {...props} />;
};

export default Button;
