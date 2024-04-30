import type { FC, ReactNode } from 'react';

import SigninForm from '../organisms/SigninForm';

type SigninProps = {
  children?: ReactNode;
};

const Signin: FC<SigninProps> = (props: SigninProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <SigninForm />
      {props.children}
    </main>
  );
};

export default Signin;
