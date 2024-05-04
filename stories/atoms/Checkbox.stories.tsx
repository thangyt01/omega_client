import { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../../src/components/atoms/Checkbox';
import Icon from '../../src/components/atoms/Icon';
import { Color, Radius, Size } from '../../src/components/atoms/enum';
import { searchIconDefinition } from '../../src/utils/createIcon';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Atoms/Checkbox',
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
  },
};
export default meta;

const defaultArgs: CheckboxProps = {
  color: Color.Default,
  size: Size.Medium,
  children: 'Checkbox',
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};

export const Disabled: Story = {};
Disabled.args = {
  ...defaultArgs,
  isDisabled: true,
};

export const DefaultSelected: Story = {};
DefaultSelected.args = {
  ...defaultArgs,
  defaultSelected: true,
};

export const CustomIconNode: Story = {};
CustomIconNode.args = {
  ...defaultArgs,
  icon: <Icon icon={searchIconDefinition} />,
};

export const AlwaysSelected: Story = {};
AlwaysSelected.args = {
  ...defaultArgs,
  isSelected: true,
};

export const Indeterminate: Story = {};
Indeterminate.args = {
  ...defaultArgs,
  isIndeterminate: true,
};

export const LineThrough: Story = {};
LineThrough.args = {
  ...defaultArgs,
  lineThrough: true,
};

export const DisableAnimation: Story = {};
DisableAnimation.args = {
  ...defaultArgs,
  disableAnimation: true,
};
