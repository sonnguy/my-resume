'use client'
import RegisterForm from '@/components/form/register';
import { IRegisterForm } from '@/types/interfaces/auth';
import React from 'react';

const Register: React.FC = () => {

  const handleFormSubmit = (data: IRegisterForm) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-100">
      <div className="w-full max-w-lg">
        <RegisterForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Register;