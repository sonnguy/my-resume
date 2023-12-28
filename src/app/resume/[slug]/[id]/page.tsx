import ResumeContent from "../../components/content";
import ResumeHeader from "../../components/header";
import ResumePersonalInfo from "../../components/personalInfo";

export default function Resume() {
  return (
    <div className="p-24">
      <div className="shadow-2xl">
        <ResumeHeader />
        <div className="flex">
          <ResumePersonalInfo />
          <ResumeContent />
        </div>
      </div>
    </div>
  )
}
