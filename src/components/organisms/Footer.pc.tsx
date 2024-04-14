import AppLogo from '@atoms/AppLogo';
import Icon from '@atoms/Icon';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import createIconDefinition from '@/utils/createIconDefinition';

type FooterType = 'normal' | 'register';

export interface FooterProps {
  type: FooterType;
}

const Social = () => {
  const socials = [
    {
      name: 'facebook',
      i18nKey: 'social.facebook',
      url: '#',
    },
    {
      name: 'instagram',
      i18nKey: 'social.instagram',
      url: '#',
    },
    {
      name: 'twitter',
      i18nKey: 'social.twitter',
      url: '#',
    },
    {
      name: 'github',
      i18nKey: 'social.github',
      url: '#',
    },
    {
      name: 'dribbble',
      i18nKey: 'social.dribbble',
      url: '#',
    },
  ];

  return (
    <div className="mt-8 flex gap-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          rel="noreferrer"
          target="_blank"
          className="text-gray-700 transition hover:opacity-75"
        >
          <Icon icon={createIconDefinition('fab', social.name as IconName)} />
        </a>
      ))}
    </div>
  );
};

const Navigation = () => {
  const t = useTranslations('Footer');

  const sections = [
    {
      title: 'About Us',
      links: [
        { label: 'Who We Are', i18nKey: 'aboutUs.whoWeAre', href: '/' },
        { label: 'Historical', i18nKey: 'aboutUs.historical', href: '/' },
        { label: 'Teams', i18nKey: 'aboutUs.teams', href: '/' },
        {
          label: 'Vision and Mission',
          i18nKey: 'aboutUs.VisionAndMission',
          href: '/',
        },
        { label: 'Contact Us', i18nKey: 'aboutUs.contactUs', href: '/' },
      ],
    },
    {
      title: 'Privacy Policy',
      links: [
        {
          label: 'Information Security',
          i18nKey: 'privacyPolicy.informationSecurity',
          href: '/',
        },
        {
          label: 'Cookie Policy',
          i18nKey: 'privacyPolicy.cookiePolicy',
          href: '/',
        },
        {
          label: 'Information Sharing',
          i18nKey: 'privacyPolicy.informationSharing',
          href: '/',
        },
        {
          label: 'Legal Compliance',
          i18nKey: 'privacyPolicy.legalCompliance',
          href: '/',
        },
        {
          label: 'Changes to the Privacy Policy',
          i18nKey: 'privacyPolicy.changesToThePrivacyPolicy',
          href: '/',
        },
      ],
    },
    {
      title: 'Help & Support',
      links: [
        {
          label: 'Customer Support',
          i18nKey: 'help&Support.customerSupport',
          href: '/',
        },
        {
          label: 'Troubleshooting',
          i18nKey: 'help&Support.troubleshooting',
          href: '/',
        },
        {
          label: 'Report a Problem',
          i18nKey: 'help&Support.reportAProblem',
          href: '/',
        },
        { label: 'Feedback', i18nKey: 'help&Support.feedback', href: '/' },
        { label: 'FAQs', i18nKey: 'help&Support.FAQs', href: '/' },
      ],
    },
    {
      title: 'Terms of Service',
      links: [
        {
          label: 'Terms of Use',
          i18nKey: 'termsOfService.termsOfUse',
          href: '/',
        },
        {
          label: 'Payment Terms',
          i18nKey: 'termsOfService.paymentTerms',
          href: '/',
        },
        {
          label: 'Service Level Agreement',
          i18nKey: 'termsOfService.serviceLevelAgreement',
          href: '/',
        },
        {
          label: 'Service Scope',
          i18nKey: 'termsOfService.serviceScope',
          href: '/',
        },
        {
          label: 'Refund Policy',
          i18nKey: 'termsOfService.refundPolicy',
          href: '/',
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="font-medium text-gray-900">{section.title}</p>
          <ul className="mt-6 space-y-4 text-sm">
            {section.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-700 transition hover:opacity-75"
                >
                  {t(link.i18nKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Footer: FC<FooterProps> = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <AppLogo />
            <p className="mt-4 max-w-xs text-gray-500">{t('description')}</p>
            <Social />
          </div>
          <Navigation />
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()}. {t('rightsReserved')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
