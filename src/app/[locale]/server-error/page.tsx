import type { Metadata } from 'next';

import Error500Text from '@/components/organisms/500';

export const metadata: Metadata = {
  title: 'Internal Server Error',
};

function ServerErrorPage() {
  return <Error500Text />;
}

export default ServerErrorPage;
