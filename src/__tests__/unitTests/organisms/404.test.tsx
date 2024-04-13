import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import Error404Text from '@/components/organisms/404';

import enLocale from '../../../../locales/en.json';
import viLocale from '../../../../locales/vi.json';

const locale = 'vi';

const messagesJson = locale === 'vi' ? viLocale : enLocale;
const messaes404 = messagesJson['404'];

describe('Error404Text', () => {
  it('renders the correct text', () => {
    render(
      <NextIntlClientProvider locale={locale} messages={messagesJson}>
        <Error404Text />
      </NextIntlClientProvider>,
    );
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(screen.getByText(messaes404['404_message'])).toBeInTheDocument();
  });

  it('renders a button with the correct text', () => {
    render(
      <NextIntlClientProvider locale={locale} messages={messagesJson}>
        <Error404Text />
      </NextIntlClientProvider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(messaes404.go_to_home);
  });
});
