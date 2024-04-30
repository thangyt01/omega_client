import Icon from '@atoms/Icon';
import type { IconName } from '@fortawesome/fontawesome-svg-core';
import React, { type FC, type PropsWithChildren } from 'react';

import createIconDefinition from '@/utils/createIconDefinition';

const FooterSocial: FC<PropsWithChildren> = () => {
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

export default FooterSocial;
