import NextImage from 'next/image';
import type { FC } from 'react';

export type ImageProps = {
  src: string;
  width?: number;
  height?: number;
  fill?: boolean | undefined;
  className?: string;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: 'eager' | 'lazy' | undefined;
  alt?: string;
};

const Image: FC<ImageProps> = (props: ImageProps) => {
  const { alt = '', width = 0, height = 0, ...attributes } = props;
  return <NextImage alt={alt} width={width} height={height} {...attributes} />;
};

export default Image;
