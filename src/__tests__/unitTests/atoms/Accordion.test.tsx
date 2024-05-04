import { AccordionItem } from '@nextui-org/react';
import { render, screen } from '@testing-library/react';
import React from 'react';

import Accordion, { type AccordionProps } from '@/components/atoms/Accordion';

const defaultContent = 'This is the default content for the Accordion Item.';

describe('Accordion', () => {
  it('should render Accordion component with provided props', () => {
    // Arrange
    const args = {
      selectionMode: 'single',
      id: 'accordion',
      'data-testid': 'accordion',
    } as Partial<AccordionProps>;

    // Act
    render(
      <Accordion {...args}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="Accordion Item 1"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Accordion Item 2"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Accordion Item 3"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>,
    );
    const accordionComponent = screen.getByTestId('accordion');

    // Assert
    expect(accordionComponent).toHaveTextContent('Accordion Item 1');
    expect(accordionComponent).toHaveTextContent('Accordion Item 2');
    expect(accordionComponent).toHaveTextContent('Accordion Item 3');
  });

  // Renders the Accordion component with invalid props
  it('should render Accordion component with invalid props', () => {
    // Arrange
    const args = {
      selectionMode: 'single',
      id: 'accordion',
      'data-testid': 'accordion',
    } as Partial<AccordionProps>;

    // Act
    render(
      <Accordion {...args}>
        <AccordionItem key="1" aria-label="Accordion 1" title={undefined}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title={null}>
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title={null}>
          {defaultContent}
        </AccordionItem>
      </Accordion>,
    );
    const accordionComponent = screen.getByTestId('accordion');

    // Assert
    expect(accordionComponent).toHaveTextContent('');
  });
});
