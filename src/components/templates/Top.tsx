import { Button } from '@nextui-org/react';
import type { FC, ReactNode } from 'react';

type TopProps = {
  children?: ReactNode;
};

const Top: FC<TopProps> = (props: TopProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
      {props.children}
    </main>
  );
};

export default Top;
