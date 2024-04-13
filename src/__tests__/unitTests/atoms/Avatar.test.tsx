/* eslint-disable jest/expect-expect */
import { render } from '@testing-library/react';

import Avatar from '@/components/atoms/Avatar';

describe('Avatar', () => {
  it('renders without crashing', () => {
    render(<Avatar />);
  });

  it('renders with props', () => {
    render(<Avatar src="https://example.com" alt="example" />);
  });

  it('renders with children', () => {
    render(<Avatar>Example</Avatar>);
  });

  it('renders with props and children', () => {
    render(
      <Avatar src="https://example.com" alt="example">
        Example
      </Avatar>,
    );
  });
});
