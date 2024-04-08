import { Meta, StoryObj } from '@storybook/react';
import Image from '../../src/components/atoms/Image';

const meta: Meta<typeof Image> = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    className: {
      options: [
        'solid',
        'bordered',
        'light',
        'flat',
        'faded',
        'shadow',
        'ghost',
      ],
      control: {
        type: 'select',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Basic: Story = {};
Basic.args = {};

export const Primary: Story = {};
