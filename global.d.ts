/* eslint-disable @typescript-eslint/consistent-type-imports */
type Messages = typeof import('./locales/vi.json');
type EnMessages = typeof import('./locales/en.json');

declare interface IntlMessages extends Messages, EnMessages {}
