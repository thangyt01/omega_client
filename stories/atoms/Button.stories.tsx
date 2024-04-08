import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '../../src/components/atoms/Button';
import {
  Variant,
  Color,
  Size,
  Radius,
  SpinnerPlacement,
} from '../../src/components/atoms/enum';
import React from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: Object.values(Variant),
      control: {
        type: 'select',
      },
      defaultValue: Variant.Solid,
    },
    color: {
      options: Object.values(Color),
      control: {
        type: 'select',
      },
      defaultValue: Color.Default,
    },
    size: {
      options: Object.values(Size),
      control: {
        type: 'select',
      },
      defaultValue: Size.Medium,
    },
    radius: {
      options: Object.values(Radius),
      control: {
        type: 'select',
      },
    },
    spinnerPlacement: {
      options: Object.values(SpinnerPlacement),
      control: {
        type: 'select',
      },
      defaultValue: SpinnerPlacement.Start,
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    isIconOnly: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
    disableRipple: {
      control: {
        type: 'boolean',
      },
    },
    disableAnimation: {
      control: {
        type: 'boolean',
      },
    },
    startContent: {
      control: {
        type: 'object',
      },
    },
    endContent: {
      control: {
        type: 'object',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

const defaultArgs: ButtonProps = {
  children: 'Button',
  variant: Variant.Solid,
  color: Color.Default,
  size: Size.Medium,
  radius: Radius.Medium,
  spinnerPlacement: SpinnerPlacement.Start,
  fullWidth: false,
  isIconOnly: false,
  disabled: false,
  isLoading: false,
  disableRipple: false,
  disableAnimation: false,
};

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};

export const IsDisabled: Story = {};
IsDisabled.args = {
  ...defaultArgs,
  disabled: true,
};

export const DisableRipple: Story = {};
DisableRipple.args = {
  ...defaultArgs,
  disableRipple: true,
};

export const IsLoading: Story = {};
IsLoading.args = {
  ...defaultArgs,
  isLoading: true,
};

export const WithIcons: Story = {};
WithIcons.args = {
  ...defaultArgs,
  startContent: <span>🚀</span>,
  endContent: <span>🚀</span>,
};

export const IconButton: Story = {};
IconButton.args = {
  ...defaultArgs,
  isIconOnly: true,
  children: <span>🚀</span>,
};

export const CustomWithClassName: Story = {};
CustomWithClassName.args = {
  ...defaultArgs,
  className:
    'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg',
};
