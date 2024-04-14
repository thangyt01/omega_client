'use client';

import Avatar from '@atoms/Avatar';
import Select from '@atoms/Select';
import SelectItem from '@atoms/SelectItem';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

export type SelectLanguageProps = {};

const SelectLanguage: FC<SelectLanguageProps> = () => {
  const t = useTranslations();

  return (
    <Select className="max-w-sm">
      <SelectItem
        key="vietnamese"
        startContent={
          <Avatar
            alt="vietnamese"
            className="size-6"
            src="https://flagcdn.com/vn.svg"
          />
        }
      >
        {t('vi_language')}
      </SelectItem>
      <SelectItem
        key="english"
        startContent={
          <Avatar
            alt="english"
            className="size-6"
            src="https://flagcdn.com/gb-eng.svg"
          />
        }
      >
        {t('en_language')}
      </SelectItem>
    </Select>
  );
};

export default SelectLanguage;
