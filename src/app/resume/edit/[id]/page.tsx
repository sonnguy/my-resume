'use client'
import ResumeEditContent from "../../components/contentEdit";
import ResumeHeader from "../../components/header";
import ResumePersonalInfo from "../../components/personalInfo";

export default function ResumeEdit() {
  return (
    <div className="p-24">
      <div className="shadow-2xl">
        <ResumeHeader />
        <div className="flex">
          <ResumePersonalInfo />
          <ResumeEditContent />
        </div>
      </div>
    </div>
  )
}
