import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './configs/AppConfig';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: AppConfig.locales,
  // Default locale if no match
  defaultLocale: AppConfig.defaultLocale,
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!_next).*)', '/', '/(vi|en)/:page*'],
};
