import { render, screen } from '@testing-library/react';

import Top from '@/components/templates/Top';

describe('Top', () => {
  // eslint-disable-next-line jest/expect-expect
  it('renders without crashing', () => {
    render(<Top />);
  });

  it('renders with children', () => {
    render(<Top>Example</Top>);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });

  it('renders a button', () => {
    render(<Top />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
