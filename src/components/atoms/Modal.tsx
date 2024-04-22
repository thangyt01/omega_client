import type { ModalProps as NextUIModalProps } from '@nextui-org/react';
import { Modal as NextUIModal } from '@nextui-org/react';
import React, { type FC, type ReactNode } from 'react';

export type ModalProps = NextUIModalProps & {
  children: ReactNode;
};

const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { children = 'Modal', ...rest } = props;
  return <NextUIModal {...rest}> {children}</NextUIModal>;
};

export default Modal;
