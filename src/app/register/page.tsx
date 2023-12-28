'use client'
import RegisterForm from '@/components/form/register';
import { IUser } from '@/types/interfaces/user';
import React from 'react';

const Register: React.FC = () => {

  const handleFormSubmit = (data: IUser) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <RegisterForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Register;