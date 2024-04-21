'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Controller } from 'react-hook-form';
import { z } from 'zod';

import { register as registerAction } from '@/actions/auth';
import Card from '@/components/atoms/Card';
import CardBody from '@/components/atoms/CardBody';
import CardHeader from '@/components/atoms/CardHeader';
import Checkbox from '@/components/atoms/Checkbox';
import { SubmitButton } from '@/components/atoms/SubmitButton';
import TempLogo from '@/components/atoms/TempLogo';
import useAppForm from '@/hooks/useAppForm';

type RegisterFormValuesProps = {
  name: string;
  email: string;
  accountName: string;
  password: string;
  passwordConfirmation: string;
  termsConfirmation: boolean;
};

export default function Register() {
  const t = useTranslations('Pages.Register');

  const registerSchema = z
    .object({
      name: z.string().trim().min(1, t('Validation.NameRequired')),
      email: z.string().email(t('Validation.InvalidEmail')).trim(),
      accountName: z.string().trim().min(3, t('Validation.InvalidAccountName')),
      password: z.string().min(6, t('Validation.InvalidPassword')).trim(),
      passwordConfirmation: z
        .string()
        .trim()
        .min(1, t('Validation.PasswordConfirmationRequired')),
      termsConfirmation: z.boolean().optional(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: t('Validation.InvalidPasswordConfirmation'),
      path: ['passwordConfirmation'], // path of error
    });

  const {
    register,
    control,
    formState: { errors },
    watch,
    trigger,
  } = useAppForm<RegisterFormValuesProps>({
    resolver: zodResolver(registerSchema),
  });

  const isConfirmed = watch('termsConfirmation');

  const onServerAction = async (formData: FormData) => {
    const valid = await trigger();
    if (valid) {
      registerAction(formData);
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 pt-4">
      <TempLogo />
      <Card className="max-w-[540px] rounded-md p-2">
        <CardHeader className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{t('Title')}</h1>
          <p className="text-[13px]">{t('WelcomeText')}</p>
        </CardHeader>
        <CardBody>
          <form className="flex flex-col gap-5" action={onServerAction}>
            <Input
              {...register('name')}
              label={t('InputName')}
              errorMessage={errors?.name?.message}
            />
            <div className="flex gap-3">
              <Input
                {...register('email')}
                label={t('InputEmail')}
                errorMessage={errors?.email?.message}
              />
              <Input
                {...register('accountName')}
                label={t('InputAccountName')}
                errorMessage={errors?.accountName?.message}
              />
            </div>
            <Input
              {...register('password')}
              label={t('InputPassword')}
              type="password"
              errorMessage={errors?.password?.message}
            />
            <Input
              label={t('InputPasswordConfirm')}
              {...register('passwordConfirmation')}
              type="password"
              errorMessage={errors?.passwordConfirmation?.message}
            />
            <Controller
              name="termsConfirmation"
              control={control}
              render={({ field: { onChange, name, onBlur, ref } }) => (
                <Checkbox
                  ref={ref}
                  name={name}
                  onBlur={onBlur}
                  onValueChange={onChange}
                >
                  {t('CheckboxTermsConfirm')}
                </Checkbox>
              )}
            />

            <SubmitButton
              color={isConfirmed ? 'primary' : 'default'}
              disabled={!isConfirmed}
            >
              {t('RegisterButton')}
            </SubmitButton>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
