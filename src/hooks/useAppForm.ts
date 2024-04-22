import { useEffect } from 'react';
import {
  useForm,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';

const useAppForm = <TFieldValues extends {}>(
  options: UseFormProps<TFieldValues>,
): UseFormReturn<TFieldValues> => {
  const form = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    ...options,
  });

  const { clearErrors } = form;

  useEffect(() => {
    form.watch((_values, changedFields) => {
      clearErrors(changedFields.name);
    });
  }, [clearErrors, form]);

  return form;
};

export default useAppForm;
