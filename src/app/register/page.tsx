'use client'
import { register } from '@/api/auth';
import RegisterForm from '@/components/form/register';
import { IRegisterForm } from '@/types/interfaces/auth';
import React from 'react';

const Register = () => {

  const handleFormSubmit = async (data: IRegisterForm) => {
    try {
      const res = await register(data);
    } catch (error) {
      console.log(error)
    }
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