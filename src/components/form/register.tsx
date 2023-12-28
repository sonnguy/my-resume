import { IRegisterForm } from '@/types/interfaces/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './formInput';

interface IRegisterFormProps {
    onSubmit: (data: IRegisterForm) => void;
}

const RegisterForm = ({ onSubmit }: IRegisterFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterForm>({
    });

    const handleFormSubmit = (data: IRegisterForm) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
            <div className="mb-4">
                <FormInput
                    label="Username"
                    name="username"
                    type="text"
                    register={register}
                    error={errors.password}
                />
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
            </div>
            <div className="flex items-center justify-center flex-col">
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;