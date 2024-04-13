import type { FC, ImgHTMLAttributes } from 'react';

type LogoType = 'vertical' | 'horizontal' | 'header-white' | 'header';

export type LogoProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt'
> & {
  logoType?: LogoType;
};

const Logo: FC<LogoProps> = (props: LogoProps) => {
  const { logoType } = props;
  let src = '';
  let alt = 'Omega Logo';

  switch (logoType) {
    case 'vertical':
      src = '/images/logo-vertical.png';
      alt = 'Vertical Logo';
      break;
    case 'horizontal':
      src = '/images/logo-horizontal.png';
      alt = 'Horizontal Logo';
      break;
    case 'header-white':
      src = '/images/logo-header-white.png';
      alt = 'Header White Logo';
      break;
    case 'header':
    default:
      src = '/images/logo-header.png';
      alt = 'Header Logo';
      break;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="mx-auto h-auto max-w-full" />;
};

export default Logo;
