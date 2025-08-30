import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Certification = ({ cvLanguage }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "certifications";
  const title = "Certifications";

  const t = {
    en: {
      title: "Certifications",
      name: "Certification Name",
      issuer: "Issuer"
    },
    de: {
      title: "Zertifikate",
      name: "Zertifikatsname",
      issuer: "Aussteller"
    }
  };

  const handleSkills = (e, index, skillType) => {
    const newSkills = [...resumeData[skillType]];
    newSkills[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };

  const addSkill = () => {
    setResumeData({ ...resumeData, [skillType]: [...resumeData[skillType], ""] });
  };

  const removeSkill = (index) => {
    const newSkills = [...resumeData[skillType]];
    newSkills.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: newSkills });
  };  

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t[cvLanguage]?.title || t.en.title}</h2>
      {resumeData[skillType].map((skill, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={t[cvLanguage]?.name || t.en.name}
            name={t[cvLanguage]?.name || t.en.name}
            className="w-full other-input"
            value={skill}
            onChange={(e) => handleSkills(e, index, skillType)}
          />
        </div>
      ))}
      <FormButton size={resumeData[skillType].length} add={addSkill} remove={removeSkill} />
    </div>
  );
};

export default Certification;