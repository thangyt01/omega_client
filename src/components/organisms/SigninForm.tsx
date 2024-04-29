import Button from '@atoms/Button';
import Checkbox from '@atoms/Checkbox';
import Divider from '@atoms/Divider';
import Input from '@atoms/Input';
import Link from '@atoms/Link';
import TempLogo from '@atoms/TempLogo';
import ButtonLinkClient from '@molecules/ButtonLinkClient';
import InputPassword from '@molecules/InputPassword';
import Image from 'next/image';
import { type FC } from 'react';

export type SigninFormProps = {};

const SigninForm: FC<SigninFormProps> = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <div className="mb-5 flex items-center justify-center">
          <TempLogo />
        </div>
      </div>
      <div className="mx-4 my-2 flex justify-center md:mx-0">
        <form className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
          <div className="-mx-3 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:w-full">
              <Input
                className="w-full"
                isRequired
                labelPlacement="outside"
                type="email"
                label="Email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6 w-full px-3 md:w-full">
              <InputPassword
                className="w-full"
                isRequired
                labelPlacement="outside"
                placeholder="Enter your password"
                label="Password"
              />
            </div>
            <div className="mb-3 flex w-full items-center justify-between px-3 ">
              <Checkbox size="sm"> Remember me</Checkbox>
              <div className="w-1/2 text-right">
                <Link href="/forget-password">
                  <span className="text-sm">Forget you password?</span>
                </Link>
              </div>
            </div>
            <div className="mb-3 w-full px-3 md:w-full">
              <Button color="primary" radius="sm" className="w-full">
                Sign in
              </Button>
            </div>
            <div className="-mb-3 w-full px-3 pb-1">
              <Divider orientation="horizontal" className="my-4">
                <span className="mx-3 text-gray-400">OR</span>
              </Divider>
            </div>
            <div className="my-3 w-full px-3 md:w-full">
              <ButtonLinkClient
                href="/auth/google"
                target="_blank"
                radius="sm"
                variant="bordered"
                className="mb-3 w-full"
              >
                <Image
                  width={24}
                  height={24}
                  priority
                  src="/assets/images/google.svg"
                  alt="Sign in with Google"
                />
                <span> Sign in with Google</span>
              </ButtonLinkClient>
              <ButtonLinkClient
                href="/auth/facebook"
                target="_blank"
                radius="sm"
                variant="bordered"
                className="mb-3 w-full"
              >
                <Image
                  width={24}
                  height={24}
                  priority
                  src="/assets/images/facebook.svg"
                  alt="Sign in with Facebook"
                />
                <span>Sign in with Facebook</span>
              </ButtonLinkClient>
              <ButtonLinkClient
                href="/auth/github"
                target="_blank"
                radius="sm"
                variant="bordered"
                className="w-full"
              >
                <Image
                  width={24}
                  height={24}
                  priority
                  src="/assets/images/github.svg"
                  alt="Sign in with Github"
                />
                <span>Sign in with Github</span>
              </ButtonLinkClient>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
