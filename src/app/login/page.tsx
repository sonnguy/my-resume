'use client'
import { login } from '@/api/auth';
import LoginForm from '@/components/form/login';
import { ILoginForm } from '@/types/interfaces/auth';
import React from 'react';

const Login = () => {
  const handleFormSubmit = async (data: ILoginForm) => {
    try {
      const res = await login(data);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-100">
      <div className="w-full max-w-lg">
        <LoginForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Login;