'use client';

import Icon from '@atoms/Icon';
import Input from '@atoms/Input';
import type { InputProps as NextUIInputProps } from '@nextui-org/react';
import { type FC, useState } from 'react';

import {
  eyeLookupIconDefinition,
  eyeSlashLookupIconDefinition,
} from '@/utils/createIcon';

export type InputPasswordProps = NextUIInputProps;

const InputPassword: FC<InputPasswordProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      label="Password"
      placeholder="Enter your password"
      endContent={
        <button
          className="w-6 focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <Icon
              className="pointer-events-none text-default-400"
              icon={eyeLookupIconDefinition}
            />
          ) : (
            <Icon
              className="pointer-events-none text-default-400"
              icon={eyeSlashLookupIconDefinition}
            />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className="max-w-xs"
      {...props}
    />
  );
};

export default InputPassword;
