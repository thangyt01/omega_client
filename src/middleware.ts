import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['vi', 'en'],

  // Default locale if no match
  defaultLocale: 'vi',
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en)/:page*'],
};
