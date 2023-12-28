'use client'
import LoginForm from '@/components/form/login';
import { ILoginForm } from '@/types/interfaces/auth';
import React from 'react';

const Login: React.FC = () => {

  const handleFormSubmit = (data: ILoginForm) => {
    console.log(data);
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