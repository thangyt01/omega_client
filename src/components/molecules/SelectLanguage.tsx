'use client';

import type { FC } from 'react';

import Avatar from '../atoms/Avatar';
import Select from '../atoms/Select';
import SelectItem from '../atoms/SelectItem';

export type SelectLanguageProps = {};

const SelectLanguage: FC<SelectLanguageProps> = () => {
  return (
    <Select className="max-w-xs" label="Select country">
      <SelectItem
        key="argentina"
        startContent={
          <Avatar
            alt="Argentina"
            className="size-6"
            src="https://flagcdn.com/ar.svg"
          />
        }
      >
        Argentina
      </SelectItem>
      <SelectItem
        key="venezuela"
        startContent={
          <Avatar
            alt="Venezuela"
            className="size-6"
            src="https://flagcdn.com/ve.svg"
          />
        }
      >
        Venezuela
      </SelectItem>
      <SelectItem
        key="brazil"
        startContent={
          <Avatar
            alt="Brazil"
            className="size-6"
            src="https://flagcdn.com/br.svg"
          />
        }
      >
        Brazil
      </SelectItem>
      <SelectItem
        key="switzerland"
        startContent={
          <Avatar
            alt="Switzerland"
            className="size-6"
            src="https://flagcdn.com/ch.svg"
          />
        }
      >
        Switzerland
      </SelectItem>
      <SelectItem
        key="germany"
        startContent={
          <Avatar
            alt="Germany"
            className="size-6"
            src="https://flagcdn.com/de.svg"
          />
        }
      >
        Germany
      </SelectItem>
      <SelectItem
        key="spain"
        startContent={
          <Avatar
            alt="Spain"
            className="size-6"
            src="https://flagcdn.com/es.svg"
          />
        }
      >
        Spain
      </SelectItem>
    </Select>
  );
};

export default SelectLanguage;
