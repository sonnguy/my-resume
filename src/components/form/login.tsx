import { ILoginForm } from '@/types/interfaces/auth';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './formInput';

interface ILoginFormProps {
  onSubmit: (data: ILoginForm) => void;
}

const LoginForm = ({ onSubmit }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
  });

  const handleFormSubmit = (data: ILoginForm) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <FormInput
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email}
      />
     <FormInput
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password}
      />
      <div className="flex items-center justify-center flex-col">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>

        <Link className="mt-3 italic text-sm" href="/register">Create a account</Link>
      </div>
    </form>
  );
};

export default LoginForm;