import Head from 'next/head';
import React from 'react';

interface Props {
  path: string;
}

function HrefLang({ path }: Props): JSX.Element {
  const viUrl = `https://omega.dev/vi/${path}`;
  const enUrl = `https://omega.dev/en/${path}`;
  return (
    <Head>
      <link rel="alternate" hrefLang="vi" href={viUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
    </Head>
  );
}

export default HrefLang;
