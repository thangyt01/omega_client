import { Meta, StoryObj } from '@storybook/react';
import Divider, { DividerProps } from '../../src/components/atoms/Divider';
import React from 'react';

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Atoms/Divider',
};
export default meta;

const defaultArgs: DividerProps = {
  children: 'Divider',
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};

export const Combined: Story = {};
Combined.render = () => (
  <div className="max-w-md">
    <div className="space-y-1">
      <h4 className="text-medium font-medium">NextUI Components</h4>
      <p className="text-small text-default-400">
        Beautiful, fast and modern React UI library.
      </p>
    </div>
    <Divider className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-small">
      <div>Blog</div>
      <Divider orientation="vertical" />
      <div>Docs</div>
      <Divider orientation="vertical" />
      <div>Source</div>
    </div>
  </div>
);
