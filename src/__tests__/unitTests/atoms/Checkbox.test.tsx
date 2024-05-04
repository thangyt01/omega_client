import { act, render, screen } from '@testing-library/react';
import React from 'react';

import type { CheckboxProps } from '@/components/atoms/Checkbox';
import Checkbox from '@/components/atoms/Checkbox';

describe('Checkbox', () => {
  it('should render Checkbox component with provided props', () => {
    // Arrange
    const args = {
      defaultSelected: true,
      onChange: jest.fn(),
      'data-testid': 'checkbox',
    } as CheckboxProps;

    // Act
    render(<Checkbox {...args} />);
    const checkboxComponent = screen.getByRole('checkbox');

    // Assert
    expect(checkboxComponent).toBeInTheDocument();
    expect(checkboxComponent).toHaveAttribute('type', 'checkbox');
    expect(checkboxComponent).toBeChecked();
  });

  it('should call onChange callback when checkbox is clicked', () => {
    // Arrange
    const onChange = jest.fn();
    const args = {
      defaultSelected: false,
      onChange,
      'data-testid': 'checkbox',
    } as CheckboxProps;

    // Act
    render(<Checkbox {...args} />);
    const checkboxComponent = screen.getByTestId('checkbox');

    act(() => {
      /* fire events that update state */
      checkboxComponent.click();

      // Assert
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    // Assert
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
