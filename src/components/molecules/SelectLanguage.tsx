'use client';

import { Select, SelectItem } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { globeLookupIconDefinition } from '@/utils/createIcon';

import Icon from '../atoms/Icon';

export type SelectLanguageProps = {};

const SelectLanguage: FC<SelectLanguageProps> = () => {
  const t = useTranslations();

  return (
    <Select
      className="max-w-36"
      radius="sm"
      placeholder="Ngôn ngữ"
      size="md"
      defaultSelectedKeys={['vietnamese']}
      startContent={
        <Icon className="size-4" icon={globeLookupIconDefinition} />
      }
    >
      <SelectItem value="vi" key="vietnamese">
        {t('vi_language')}
      </SelectItem>
      <SelectItem value="en" key="english">
        {t('en_language')}
      </SelectItem>
    </Select>
  );
};

export default SelectLanguage;
