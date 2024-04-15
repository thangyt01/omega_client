import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import Error500Text from '@/components/organisms/500';

import enLocale from '../../../../locales/en.json';
import viLocale from '../../../../locales/vi.json';

const locale = 'vi';

const messagesJson = locale === 'vi' ? viLocale : enLocale;
const messages500 = messagesJson['500'];

describe('Error500Text', () => {
  it('renders the correct text', () => {
    render(
      <NextIntlClientProvider locale={locale} messages={messagesJson}>
        <Error500Text />
      </NextIntlClientProvider>,
    );
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(
      screen.getByText('Whoops, đã xảy ra lỗi trên máy chủ.'),
    ).toBeInTheDocument();
    expect(screen.getByText(messages500['500_message'])).toBeInTheDocument();
  });

  it('renders a button with the correct text', () => {
    render(
      <NextIntlClientProvider locale={locale} messages={messagesJson}>
        <Error500Text />
      </NextIntlClientProvider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(
      messages500.go_to_home,
    );
  });
});
