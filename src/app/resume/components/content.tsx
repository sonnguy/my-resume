import { user } from '@/constants/common';


const ResumeContent = () => {
    const { resume } = user;
    const { education, summary, experience } = resume;

    return <div className="px-4 py-5 bg-gray-100 flex-1 rounded-br-lg">
        <p className="text-black italic">{summary}</p>
        <h1 className="text-black font-bold mt-3 mb-2">EDUCATION</h1>
        {
            education.map(({ institution, degree, startDate, endDate }: any, index: number) => (
                <div key={index}>
                    <p><span className="font-bold">{institution}</span>:<span className="italic text-sm ml-2">{startDate} - {endDate}</span></p>
                    <p className="italic mb-2">{degree}</p>
                </div>
            ))
        }
        <h1 className="text-black font-bold mt-3 mb-2">EXPERIENCE</h1>
        {
            experience.map(({ company, position, startDate, endDate, description }: any, index: number) => (
                <div key={index}>
                    <p><span className="font-bold">{company}</span>:<span className="italic text-sm ml-2">{startDate} - {endDate}</span></p>
                    <p className="italic mb-2">{position}</p>
                    <p>{description}</p>
                </div>
            ))
        }
    </div>
}

export default ResumeContent;