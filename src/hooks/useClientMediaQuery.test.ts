import { expect } from '@playwright/test';
import { renderHook } from '@testing-library/react';

import { useClientMediaQuery } from './useClientMediaQuery';

describe('useClientMediaQuery', () => {
  it('should return the initial match value', () => {
    // Mock the window.matchMedia function
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() =>
      useClientMediaQuery('(min-width: 768px)'),
    );

    expect(result.current).toBe(false);
  });
});
