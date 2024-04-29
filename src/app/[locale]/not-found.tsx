import type { Metadata } from 'next';

import AppFrame from '@/components/frames/AppFrame.sp';
import Error404Text from '@/components/organisms/404';

export const metadata: Metadata = {
  title: 'Not Found',
};

function NotFoundPage() {
  return (
    <AppFrame>
      <Error404Text />
    </AppFrame>
  );
}

export default NotFoundPage;
