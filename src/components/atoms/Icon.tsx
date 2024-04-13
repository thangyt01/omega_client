import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { FunctionComponent, HTMLAttributes } from 'react';
import React from 'react';

export type IconProps = HTMLAttributes<HTMLElement> & FontAwesomeIconProps;

const Icon: FunctionComponent<IconProps> = (props: IconProps) => (
  <FontAwesomeIcon className="size-4" {...props} />
);

export default Icon;
