import { useTranslations } from 'next-intl';
import React from 'react';

const FooterNavigation = () => {
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

export default FooterNavigation;
