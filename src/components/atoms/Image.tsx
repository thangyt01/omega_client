// import { ImageProps as NextImageProps } from 'next/image';
import { FC, HtmlHTMLAttributes } from 'react';

export type ImageProps = HtmlHTMLAttributes<HTMLImageElement>;

const Image: FC<ImageProps> = (props: ImageProps) => {
  return <img {...props} />;
};

export default Image;
