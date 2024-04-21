'use server';

// eslint-disable-next-line unused-imports/no-unused-vars
export const register = async (_data: FormData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  // mutate
  return {
    message: 'success',
    errors: '',
  };
};

export const login = () => {};
