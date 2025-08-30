import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Summary = ({ cvLanguage }) => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);

  const t = {
    en: {
      title: "Summary",
      placeholder: "Write a brief summary about yourself"
    },
    de: {
      title: "Zusammenfassung",
      placeholder: "Schreiben Sie eine kurze Zusammenfassung über sich selbst"
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t[cvLanguage]?.title || t.en.title}</h2>
      <div className="grid-4">
        <textarea
          placeholder={t[cvLanguage]?.placeholder || t.en.placeholder}
          name="summary"
          className="w-full other-input h-40"
          value={resumeData.summary}
          onChange={handleChange}
          maxLength="500"
        />
      </div>
    </div>
  );
};

export default Summary;
