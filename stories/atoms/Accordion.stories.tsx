import { Meta, StoryObj } from '@storybook/react';
import Accordion, {
  AccordionProps,
} from '../../src/components/atoms/Accordion';
import {
  AccordionVariant,
  SelectionBehavior,
  SelectionMode,
} from '../../src/components/atoms/enum';
import React, { Fragment } from 'react';
import { AccordionItem } from '@nextui-org/react';
import Avatar from '../../src/components/atoms/Avatar';
import Icon from '../../src/components/atoms/Icon';
import {
  sunIconDefinition,
  moonIconDefinition,
  anchorIconDefinition,
} from '../../src/utils/createIcon';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Atoms/Accordion',
  argTypes: {
    variant: {
      options: Object.values(AccordionVariant),
      control: {
        type: 'select',
      },
      defaultValue: AccordionVariant.Light,
    },
    selectionBehavior: {
      options: Object.values(SelectionBehavior),
      control: {
        type: 'select',
      },
      defaultValue: SelectionBehavior.Toggle,
    },
    selectionMode: {
      options: Object.values(SelectionMode),
      control: {
        type: 'select',
      },
    },
    isCompact: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    showDivider: {
      control: {
        type: 'boolean',
      },
    },
    hideIndicator: {
      control: {
        type: 'boolean',
      },
    },
    disableAnimation: {
      control: {
        type: 'boolean',
      },
    },
    disableIndicatorAnimation: {
      control: {
        type: 'boolean',
      },
    },
    disallowEmptySelection: {
      control: {
        type: 'boolean',
      },
    },
    keepContentMounted: {
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const defaultRender = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion Item 1">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion Item 2">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion Item 3">
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: defaultRender,
};
Default.args = {
  selectionMode: SelectionMode.Single,
};

export const IsCompact: Story = {
  render: defaultRender,
};
IsCompact.args = {
  isCompact: true,
};

export const MultipleSelection: Story = {
  render: defaultRender,
};
MultipleSelection.args = {
  selectionMode: SelectionMode.Multiple,
};

export const DefaultExpanded: Story = {
  render: defaultRender,
};
DefaultExpanded.args = {
  defaultExpandedKeys: ['1'],
};

export const KeepContentMounted: Story = {
  render: defaultRender,
};
KeepContentMounted.args = {
  keepContentMounted: true,
};

export const DisableKeys: Story = {
  render: defaultRender,
};
DisableKeys.args = {
  disabledKeys: ['1', '2'],
};

export const StartContent: Story = {
  render: (args) => (
    <Accordion selectionMode="multiple">
      <AccordionItem
        key="1"
        aria-label="Chung Miller"
        startContent={
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        }
        subtitle="4 unread messages"
        title="Chung Miller"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Janelle Lenard"
        startContent={
          <Avatar
            isBordered
            color="success"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        }
        subtitle="3 incompleted steps"
        title="Janelle Lenard"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Zoey Lang"
        startContent={
          <Avatar
            isBordered
            color="warning"
            radius="lg"
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
        }
        subtitle={
          <p className="flex">
            2 issues to<span className="text-primary ml-1">fix now</span>
          </p>
        }
        title="Zoey Lang"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  ),
};

export const WithSubtitle: Story = {
  render: (args) => (
    <Fragment>
      <h1>Accordion with subtitle</h1>
      {defaultRender(args)}
    </Fragment>
  ),
};
WithSubtitle.args = {
  selectionMode: SelectionMode.Single,
};

export const Variants: Story = {
  render: (args: AccordionProps) => (
    <Fragment>
      <h2>Default</h2>
      {defaultRender({ variant: AccordionVariant.Light, ...args })}
      <h2>Bordered</h2>
      {defaultRender({ variant: AccordionVariant.Bordered, ...args })}
      <h2>Shadow</h2>
      {defaultRender({ variant: AccordionVariant.Shadow, ...args })}
      <h2>Splitted</h2>
      {defaultRender({ variant: AccordionVariant.Splitted, ...args })}
    </Fragment>
  ),
};

export const CustomIndicator: Story = {
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        indicator={<Icon icon={anchorIconDefinition} />}
        title="Anchor"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="moon"
        aria-label="Moon"
        indicator={<Icon icon={moonIconDefinition} />}
        title="Moon"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="sun"
        aria-label="Sun"
        indicator={<Icon icon={sunIconDefinition} />}
        title="Sun"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  ),
};
