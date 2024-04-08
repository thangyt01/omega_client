import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import React, { FunctionComponent, HTMLAttributes, Fragment } from 'react';
import css from 'styled-jsx/css';

const styles = css``;

export type IconProps = HTMLAttributes<HTMLElement> & FontAwesomeIconProps;

const Icon: FunctionComponent<IconProps> = (props: IconProps) => (
  <Fragment>
    <FontAwesomeIcon {...props} />
    <style jsx>{styles}</style>
  </Fragment>
);

export default Icon;
