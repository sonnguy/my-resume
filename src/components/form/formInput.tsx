
import { FieldError } from 'react-hook-form';
interface IFormInputProps {
  label: string;
  name: string;
  type: string;
  register: any;
  error?: FieldError | undefined;
}

const FormInput = ({ label, name, type, register, error }: IFormInputProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        id={name}
        {...register(name, { required: `${label} is required` })}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default FormInput;
