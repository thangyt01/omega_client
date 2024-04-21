import type { Metadata } from 'next';

import Error404Text from '@/components/organisms/404';

export const metadata: Metadata = {
  title: 'Not Found',
};

function NotFoundPage() {
  return <Error404Text />;
}

export default NotFoundPage;
