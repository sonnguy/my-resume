import bgImage from '../../../../public/images/mountain.jpg'
import { user } from '@/constants/common';

const ResumeHeader = () => {
    const { firstName, lastName, position } = user;

    return <div className="flex justify-center flex-col items-center h-[300px] bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${bgImage.src})` }}>
        <h1 className="font-bold text-[30px]">{`${firstName} ${lastName}`}</h1>
        <p className="font-normal italic">{position}</p>
    </div>
}

export default ResumeHeader;