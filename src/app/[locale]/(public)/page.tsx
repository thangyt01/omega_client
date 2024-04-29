import { getTranslations } from 'next-intl/server';

import Top from '@/components/templates/Top';

type HomeProps = {
  params: { locale: string };
};

export async function generateMetadata(props: HomeProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Top',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Home() {
  return <Top />;
}
