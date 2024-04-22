'use client';

import { useFormStatus } from 'react-dom';

import Button, { type ButtonProps } from './Button';

export function SubmitButton(props: Omit<ButtonProps, 'type' | 'isLoading'>) {
  const { pending } = useFormStatus();

  return <Button type="submit" isLoading={pending} {...props} />;
}
