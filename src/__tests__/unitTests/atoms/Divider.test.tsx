import { render, screen } from '@testing-library/react';

import Divider, { type DividerProps } from '@/components/atoms/Divider';

describe('Divider', () => {
  it('renders horizontal divider without crashing', () => {
    const args = {
      'data-testid': 'divider',
    } as DividerProps;

    render(<Divider {...args} />);
    const horizontalDivider = screen.getByTestId('divider');
    expect(horizontalDivider).toBeInTheDocument();
  });

  it('renders vertical divider without crashing', () => {
    const args = {
      'data-testid': 'divider',
      orientation: 'vertical',
    } as DividerProps;

    render(<Divider {...args} />);
    const verticalDivider = screen.getByTestId('divider');
    expect(verticalDivider).toBeInTheDocument();
  });

  it('renders children for horizontal divider', () => {
    const args = {
      'data-testid': 'divider',
    } as DividerProps;

    render(<Divider {...args}>Example</Divider>);
    const horizontalDivider = screen.getByTestId('divider');
    expect(horizontalDivider).toHaveTextContent('Example');
  });

  it('renders NextUI Divider for vertical divider', () => {
    const args = {
      'data-testid': 'divider',
      orientation: 'vertical',
    } as DividerProps;

    render(<Divider {...args} />);
    const nextUIDivider = screen.getByTestId('divider');
    expect(nextUIDivider).toBeInTheDocument();
  });
});
