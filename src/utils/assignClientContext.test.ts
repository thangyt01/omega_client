import { assignClientContext } from './assignClientContext';

describe('assignClientContext', () => {
  it('should assign default values when no props are provided', () => {
    const result = assignClientContext({});

    expect(result.isMobile).toBe(false);
    expect(result.ua).toBe('');
    expect(result.locale).toBe('vi');
  });

  it('should assign provided props', () => {
    const props = {
      isMobile: true,
      ua: 'Mozilla/5.0',
      locale: 'en',
    };

    const result = assignClientContext(props);

    expect(result.isMobile).toBe(true);
    expect(result.ua).toBe('Mozilla/5.0');
    expect(result.locale).toBe('en');
  });

  it('should override default values with provided props', () => {
    const props = {
      isMobile: true,
      ua: 'Mozilla/5.0',
    };

    const result = assignClientContext(props);

    expect(result.isMobile).toBe(true);
    expect(result.ua).toBe('Mozilla/5.0');
    expect(result.locale).toBe('vi');
  });
});
