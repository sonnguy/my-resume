import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormInput from './formInput';
import { IUser } from '@/types/interfaces/user';

interface IResumeFormProps {
    onSubmit: (data: IUser) => void;
    defaultValues: IUser;
}

const ResumeForm = ({ onSubmit, defaultValues }: IResumeFormProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IUser>({
        defaultValues,
    });

    const [userResume, setUserResume] = useState(defaultValues)

    const handleFormSubmit = (data: IUser) => {
        onSubmit(data);
    };

    const setDefaultValues = (fieldName: any, value: any) => {
        setValue(fieldName, value);
    };

    React.useEffect(() => {
        setDefaultValues('resume', userResume.resume);
    }, [userResume]);

    const addEducation = () => {
        userResume.resume.education.push({
            institution: '',
            degree: '',
            startDate: '',
            endDate: ''
        })
        setUserResume({ ...userResume });
    }

    const removeEducation = (index: number) => {
        userResume.resume.education.splice(index, 1);
        setUserResume({ ...userResume });
    }

    const addExperience = () => {
        userResume.resume.experience.push({
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        })
        setUserResume({ ...userResume });
    }


    const removeExperience = (index: number) => {
        userResume.resume.experience.splice(index, 1);
        setUserResume({ ...userResume });
    }

    const addSkill = () => {
        userResume.resume.skills.push('');
        setUserResume({ ...userResume });
    }

    const removeSkill = (index: number) => {
        userResume.resume.skills.splice(index, 1);
        setUserResume({ ...userResume });
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="flex justify-between">
                <div className="flex-1 mr-3">
                    <FormInput
                        label="FirstName"
                        name="firstName"
                        type="text"
                        register={register}
                        error={errors.firstName}
                    />
                </div>
                <div className="flex-1 ml-3">
                    <FormInput
                        label="LastName"
                        name="lastName"
                        type="text"
                        register={register}
                        error={errors.lastName}
                    />
                </div>
            </div>
            <div className="mb-4">
                <FormInput
                    label="Role"
                    name="position"
                    type="text"
                    register={register}
                    error={errors.position}
                />
            </div>
            <div className="mb-4">
                <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email}
                />
            </div>
            <div className="mb-4">
                <FormInput
                    label="Phone"
                    name="phone"
                    type="text"
                    register={register}
                    error={errors.phone}
                />
            </div>
            <div className="mb-4">
                <FormInput
                    label="Address"
                    name="address"
                    type="text"
                    register={register}
                    error={errors.address}
                />
            </div>
            <div className="mb-4">
                <FormInput
                    label="Image"
                    name="image"
                    type="text"
                    register={register}
                    error={errors.image}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">Summary</label>
                <textarea id="summary" {...register('resume.summary')} rows={8} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold">Skills</h3>
                    <button type="button" onClick={addSkill} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Skill
                    </button>
                </div>
                <div className="flex flex-wrap">
                    {userResume.resume.skills.map((item, index) => (
                        <div key={index} className="flex-1 max-w-[200px] mb-3 mr-3 relative flex items-center">
                            <input
                                className="shadow appearance-none border rounded-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                {...register(`resume.skills[${index}]`)}
                            />
                            <button type="button" onClick={() => { removeSkill(index) }} className="bg-red-500 text-white text-sm py-1 px-3 rounded-full absolute right-2">
                                x
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold">Education</h3>
                    <button type="button" onClick={addEducation} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Education
                    </button>
                </div>
                {userResume.resume.education.map((item, index) => (
                    <div key={index} className="bg-gray-100 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 relative">
                        <button type="button" onClick={() => { removeEducation(index) }} className="bg-red-500 text-white text-sm py-1 px-3 rounded absolute bottom-2 right-2">
                            Delete
                        </button>
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 mr-3">
                                <label htmlFor={`education[${index}].institution`} className="block text-gray-700 text-sm font-bold mb-2">Institution</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`education[${index}].institution`}
                                    {...register(`resume.education[${index}].institution`)}
                                />
                            </div>
                            <div className="flex-1 ml-3">
                                <label htmlFor={`education[${index}].degree`} className="block text-gray-700 text-sm font-bold mb-2">Degree</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`education[${index}].degree`}
                                    {...register(`resume.education[${index}].degree`)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 mr-3">
                                <label htmlFor={`education[${index}].startDate`} className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`education[${index}].startDate`}
                                    {...register(`resume.education[${index}].startDate`)}
                                />
                            </div>
                            <div className="flex-1 ml-3">
                                <label htmlFor={`education[${index}].endDate`} className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`education[${index}].endDate`}
                                    {...register(`resume.education[${index}].endDate`)}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold mb-3">Experience</h3>
                    <button type="button" onClick={addExperience} className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Experience
                    </button>
                </div>
                {defaultValues.resume.experience.map((item, index) => (
                    <div key={index} className="bg-gray-100 shadow-md rounded-lg px-6 pt-8 pb-8 mb-4 relative">
                        <button type="button" onClick={() => { removeExperience(index) }} className="bg-red-500 text-white text-sm py-1 px-3 rounded absolute bottom-2 right-2">
                            Delete
                        </button>
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 mr-3">
                                <label htmlFor={`experience[${index}].company`} className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`experience[${index}].company`}
                                    {...register(`resume.experience[${index}].company`)}
                                />
                            </div>
                            <div className="flex-1 ml-3">
                                <label htmlFor={`experience[${index}].position`} className="block text-gray-700 text-sm font-bold mb-2">Position</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`experience[${index}].position`}
                                    {...register(`resume.experience[${index}].position`)}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div className="flex-1 mr-3">
                                <label htmlFor={`experience[${index}].startDate`} className="block text-gray-700 text-sm font-bold mb-2">Start Date</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`experience[${index}].startDate`}
                                    {...register(`resume.experience[${index}].startDate`)}
                                />
                            </div>
                            <div className="flex-1 ml-3">
                                <label htmlFor={`education[${index}].endDate`} className="block text-gray-700 text-sm font-bold mb-2">End Date</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    id={`experience[${index}].endDate`}
                                    {...register(`resume.experience[${index}].endDate`)}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">Description</label>
                            <textarea id={`experience[${index}].description`} {...register(`resume.experience[${index}].description`)} rows={8} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center flex-col">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Save
                </button>
            </div>
        </form>
    );
};

export default ResumeForm;