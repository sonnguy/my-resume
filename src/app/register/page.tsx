'use client'
import RegisterForm from '@/components/form/register';
import { registerUser } from '@/store/authSlice';
import { RootState } from '@/store/reducers';
import { IRegisterForm } from '@/types/interfaces/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleFormSubmit = (data: IRegisterForm) => {
    try {
      dispatch(registerUser(data));
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [loading, user])

  return (
    <div className="flex justify-center items-center w-full h-full bg-gray-100">
      <div className="w-full max-w-lg">
        <RegisterForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default Register;