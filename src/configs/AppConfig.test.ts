import { getBaseUrl } from './AppConfig';

describe('getBaseUrl', () => {
  it('should return the value of NEXT_PUBLIC_APP_URL if it exists', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://example.com';

    const result = getBaseUrl();

    expect(result).toBe('https://example.com');

    delete process.env.NEXT_PUBLIC_APP_URL;
  });

  it('should return the value of VERCEL_URL if it exists', () => {
    process.env.VERCEL_URL = 'example.vercel.app';

    const result = getBaseUrl();

    expect(result).toBe('https://example.vercel.app');

    delete process.env.VERCEL_URL;
  });

  it('should return the default value if neither NEXT_PUBLIC_APP_URL nor VERCEL_URL exists', () => {
    const result = getBaseUrl();

    expect(result).toBe('http://localhost:3000');
  });
});
