import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup, {
  AvatarGroupProps,
} from '../../src/components/atoms/AvatarGroup';
import Avatar from '../../src/components/atoms/Avatar';
import { Color, Radius, Size } from '../../src/components/atoms/enum';
import React from 'react';

const meta: Meta<typeof AvatarGroup> = {
  component: AvatarGroup,
  title: 'Atoms/AvatarGroup',
  argTypes: {
    max: {
      control: {
        type: 'number',
      },
      defaultValue: 5,
    },
    total: {
      control: {
        type: 'number',
      },
    },
    color: {
      options: Object.values(Color),
      control: {
        type: 'select',
      },
      defaultValue: Color.Default,
    },
    radius: {
      options: Object.values(Radius),
      control: {
        type: 'select',
      },
      defaultValue: Radius.Full,
    },
    size: {
      options: Object.values(Size),
      control: {
        type: 'select',
      },
      defaultValue: Size.Medium,
    },
    isBordered: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    isGrid: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};
export default meta;

const defaultArgs: AvatarGroupProps = {
  max: 5,
  total: 10,
  color: Color.Default,
  radius: Radius.Full,
  size: Size.Medium,
  isBordered: false,
  isDisabled: false,
  isGrid: false,
  children: Array.from({ length: 10 }, (_, i) => (
    <Avatar
      key={i}
      src={`https://randomuser.me/api/portraits/med/women/${i}.jpg`}
      alt="avatar"
    />
  )),
};

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {};
Default.args = { ...defaultArgs, isBordered: true, color: Color.Primary };

export const Grid: Story = {};
Grid.args = {
  ...defaultArgs,
  isGrid: true,
  isBordered: true,
  color: Color.Primary,
};

export const Disabled: Story = {};
Disabled.args = {
  ...defaultArgs,
  isDisabled: true,
  color: Color.Warning,
  isBordered: true,
};

export const WithTotal: Story = {};
WithTotal.args = {
  ...defaultArgs,
  total: 10,
  max: 3,
  isBordered: true,
  color: Color.Primary,
};
