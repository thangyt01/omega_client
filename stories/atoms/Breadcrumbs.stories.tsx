import { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs, { BreadcrumbsProps } from '../../src/components/atoms/Breadcrumbs';
import React from 'react';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Atoms/Breadcrumbs',
};
export default meta;


const defaultArgs: BreadcrumbsProps = {
 breadcrumbListItems: [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About',
      to: '/about',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
  ],
};

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {};
Default.args = {
  ...defaultArgs,
};

export const Disabled: Story = {};
Disabled.args = {
  ...defaultArgs,
  isDisabled: true,
};

export const CustomSeparator: Story = {};
CustomSeparator.args = {
  ...defaultArgs,
  separator: '>',
};

const withStartContentArgs: BreadcrumbsProps = {
  breadcrumbListItems: [
    {
      title: 'Home',
      to: '/',
      startContent : <span>🏠</span>
    },
    {
      title: 'About',
      to: '/about',
      startContent : <span>📖</span>
    },
    {
      title: 'Contact',
      to: '/contact',
      startContent : <span>📞</span>
    },
  ],
};

export const WithStartContent: Story = {};
WithStartContent.args = {
  ...withStartContentArgs,
};

const withEndContentArgs: BreadcrumbsProps = {
  breadcrumbListItems: [
    {
      title: 'Home',
      to: '/',
      endContent : <span>🏠</span>
    },
    {
      title: 'About',
      to: '/about',
      endContent : <span>📖</span>
    },
    {
      title: 'Contact',
      to: '/contact',
      endContent : <span>📞</span>
    },
  ],
};

export const WithEndContent: Story = {};
WithEndContent.args = {
  ...withEndContentArgs,
};

export const WithMaxItems: Story = {};
WithMaxItems.args = {
  ...defaultArgs,
  maxItems: 2,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
};
