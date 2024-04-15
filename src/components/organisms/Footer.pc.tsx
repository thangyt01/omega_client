import TempLogo from '@atoms/TempLogo';
import FooterNavigation from '@molecules/FooterNavigation';
import FooterSocial from '@molecules/FooterSocial';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

type FooterType = 'normal' | 'register';

export interface FooterProps {
  type: FooterType;
}

const Footer: FC<FooterProps> = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <TempLogo />
            <p className="mt-4 max-w-xs text-gray-500">{t('description')}</p>
            <FooterSocial />
          </div>
          <FooterNavigation />
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()}. {t('rightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
