import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // language selection
  const [cvLanguage, setCvLanguage] = useState('en');

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
          cvLanguage,
          setCvLanguage,
        }}
      >
        <Meta
          title="Tunibless"
          description="ATSResume is a cutting-edge resume builder that helps job seekers create a professional, ATS-friendly resume in minutes. Our platform uses the latest technology to analyze and optimize your resume for maximum visibility and success with applicant tracking systems. Say goodbye to frustration and wasted time spent on manual resume formatting. Create your winning resume with ATSResume today and get noticed by employers."
          keywords="ATS-friendly, Resume optimization, Keyword-rich resume, Applicant Tracking System, ATS resume builder, ATS resume templates, ATS-compliant resume, ATS-optimized CV, ATS-friendly format, ATS resume tips, Resume writing services, Career guidance, Job search in India, Resume tips for India, Professional resume builder, Cover letter writing, Interview preparation, Job interview tips, Career growth, Online job applications, resume builder, free resume builder, resume ats, best free resume builder, resume creator, resume cv, resume design, resume editor, resume maker"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-7xl md:mx-auto md:h-screen">
          {/* Language Selector */}
          <div className="p-2 bg-white rounded shadow mb-2 w-fit exclude-print">
            <label htmlFor="cv-language" className="mr-2 font-semibold">CV Language:</label>
            <select id="cv-language" value={cvLanguage} onChange={e => setCvLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
          {!formClose && (
            <form className="p-4 bg-blue-600 exclude-print md:max-w-[40%] md:h-screen md:overflow-y-scroll">
              <LoadUnload cvLanguage={cvLanguage} />
              <PersonalInformation cvLanguage={cvLanguage} />
              <SocialMedia cvLanguage={cvLanguage} />
              <Summary cvLanguage={cvLanguage} />
              <Education cvLanguage={cvLanguage} />
              <WorkExperience cvLanguage={cvLanguage} />
              <Projects cvLanguage={cvLanguage} />
              {
                resumeData.skills.map((skill, index) => (
                  <Skill
                    title={skill.title}
                    key={index}
                    cvLanguage={cvLanguage}
                  />
                ))
              }
              <Language cvLanguage={cvLanguage} />
              <Certification cvLanguage={cvLanguage} />
            </form>
          )}
          <Preview cvLanguage={cvLanguage} />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
