'use client';

import Error from 'next/error';

type GlobalErrorProps = {
  params: {
    locale: string;
  };
  error: Error;
};

function captureException(error: Error) {
  // Capture exception
  // todo: implement error capturing

  // eslint-disable-next-line no-console
  console.error(error);
}

export default function GlobalError(props: GlobalErrorProps) {
  captureException(props.error);
  return (
    <html lang={props.params.locale}>
      <body>
        <Error statusCode={undefined as any} />
      </body>
    </html>
  );
}
