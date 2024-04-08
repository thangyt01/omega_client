import { Meta, StoryObj } from '@storybook/react';
import Avatar, { AvatarProps } from '../../src/components/atoms/Avatar';
import { Color, Radius, Size } from '../../src/components/atoms/enum';
import React from 'react';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Atoms/Avatar',
  argTypes: {
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
    isFocusable: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    showFallback: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    classNames: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

const defaultArgs: AvatarProps = {
  src: undefined,
  color: Color.Default,
  radius: Radius.Full,
  size: Size.Medium,
  isBordered: false,
  isDisabled: false,
  isFocusable: false,
  showFallback: false,
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};

export const WithText: Story = {};
WithText.args = {
  ...defaultArgs,
  src: undefined,
  name: 'J',
  color: Color.Danger,
};

export const WithImage: Story = {};
WithImage.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
};

export const Disabled: Story = {};
Disabled.args = {
  ...defaultArgs,
  isDisabled: true,
  src: 'https://avatars.githubusercontent.com/u/507615',
  color: Color.Secondary,
  isBordered: true,
};

export const Bordered: Story = {};
Bordered.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
  color: Color.Secondary,
  isBordered: true,
};

export const Focusable: Story = {};
Focusable.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
  isFocusable: true,
};

export const WithIcon: Story = {};
WithIcon.args = {
  ...defaultArgs,
  color: Color.Primary,
  size: Size.Large,
};

export const Custom: Story = {};
Custom.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
  color: Color.Primary,
  size: Size.Large,
  isBordered: true,
  isFocusable: true,
  showFallback: true,
};

export const CustomSize: Story = {};
CustomSize.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
  classNames: {
    base: '"w-32 h-32 text-base"',
  },
};

export const DefaultIcon: Story = {};
DefaultIcon.args = {
  ...defaultArgs,
  src: undefined,
  color: Color.Danger,
};

export const IconFallback: Story = {};
IconFallback.args = {
  ...defaultArgs,
  src: 'https://avatars.githubusercontent.com/u/507615',
  showFallback: true,
};

export const CustomFallback: Story = {};
CustomFallback.args = {
  ...defaultArgs,
  showFallback: true,
  fallback: (
    <div className="flex items-center justify-center w-12 h-12 bg-gray-500 rounded-full">
      <span className="text-white">J</span>
    </div>
  ),
};
