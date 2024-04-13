import { Meta, StoryObj } from '@storybook/react';
import SelectLanguage, { SelectLanguageProps } from '../../src/components/molecules/SelectLanguage';

const meta: Meta<typeof SelectLanguage> = {
  component: SelectLanguage,
  title: 'Molecules/SelectLanguage',
};
export default meta;

const defaultArgs: SelectLanguageProps = {};

type Story = StoryObj<typeof SelectLanguage>;

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};
