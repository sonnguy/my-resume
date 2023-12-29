
import Icon from '@/components/icon/icon'
import { user } from '@/constants/common';
import Image from 'next/image'


const ResumePersonalInfo = () => {
    const { phone, email, address, image } = user;
    return <div className="px-4 py-5 bg-black w-1/4 rounded-bl-lg">
        <div className="flex justify-center py-3">
            <Image
                src={image}
                alt="SonNguy Logo"
                className="rounded-full"
                width={200}
                height={200}
                priority
            />
        </div>
        <h1 className="text-white py-3 font-bold">CONTACT</h1>
        <div className="flex pb-3">
            <Icon name={'phone'} size={5} />
            <p className="text-white ml-3">{phone}</p>
        </div>
        <div className="flex pb-3">
            <Icon name={'mail'} size={5} />
            <p className="text-white ml-3">{email}</p>
        </div>
        <div className="flex pb-3">
            <Icon name={'mapMaker'} size={5} />
            <p className="text-white ml-3">{address}</p>
        </div>
    </div>
}

export default ResumePersonalInfo;