import { useTranslations } from 'next-intl';
import React from 'react';

const FooterNavigation = () => {
  const t = useTranslations('Footer');

  const sections = [
    {
      title: t('aboutUs.title'),
      links: [
        { label: 'Who We Are', content: t('aboutUs.whoWeAre'), href: '/' },
        { label: 'Historical', content: t('aboutUs.historical'), href: '/' },
        { label: 'Teams', content: t('aboutUs.teams'), href: '/' },
        {
          label: 'Vision and Mission',
          content: t('aboutUs.VisionAndMission'),
          href: '/',
        },
        { label: 'Contact Us', content: t('aboutUs.contactUs'), href: '/' },
      ],
    },
    {
      title: t('privacyPolicy.title'),
      links: [
        {
          label: 'Information Security',
          content: t('privacyPolicy.informationSecurity'),
          href: '/',
        },
        {
          label: 'Cookie Policy',
          content: t('privacyPolicy.cookiePolicy'),
          href: '/',
        },
        {
          label: 'Information Sharing',
          content: t('privacyPolicy.informationSharing'),
          href: '/',
        },
        {
          label: 'Legal Compliance',
          content: t('privacyPolicy.legalCompliance'),
          href: '/',
        },
        {
          label: 'Changes to the Privacy Policy',
          content: t('privacyPolicy.changesToThePrivacyPolicy'),
          href: '/',
        },
      ],
    },
    {
      title: t('help&Support.title'),
      links: [
        {
          label: 'Customer Support',
          content: t('help&Support.customerSupport'),
          href: '/',
        },
        {
          label: 'Troubleshooting',
          content: t('help&Support.troubleshooting'),
          href: '/',
        },
        {
          label: 'Report a Problem',
          content: t('help&Support.reportAProblem'),
          href: '/',
        },
        { label: 'Feedback', content: t('help&Support.feedback'), href: '/' },
        { label: 'FAQs', content: t('help&Support.FAQs'), href: '/' },
      ],
    },
    {
      title: t('termsOfService.title'),
      links: [
        {
          label: 'Terms of Use',
          content: t('termsOfService.termsOfUse'),
          href: '/',
        },
        {
          label: 'Payment Terms',
          content: t('termsOfService.paymentTerms'),
          href: '/',
        },
        {
          label: 'Service Level Agreement',
          content: t('termsOfService.serviceLevelAgreement'),
          href: '/',
        },
        {
          label: 'Service Scope',
          content: t('termsOfService.serviceScope'),
          href: '/',
        },
        {
          label: 'Refund Policy',
          content: t('termsOfService.refundPolicy'),
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
                  aria-label={link.label}
                >
                  {link.content}
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
