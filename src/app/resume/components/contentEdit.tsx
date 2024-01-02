import ResumeForm from '@/components/form/resume';
import { user } from '@/constants/common';
import { IUser } from '@/types/interfaces/user';
import { useState } from 'react';


const ResumeEditContent = () => {
  const [data, setData] = useState<IUser>(user);

    const handleFormSubmit = (data: IUser) => {
        console.log(data);
      };

    return <div className="px-4 py-5 bg-gray-100 flex-1 rounded-br-lg">
        <ResumeForm onSubmit={handleFormSubmit} defaultValues={data}/>
    </div>
}

export default ResumeEditContent;