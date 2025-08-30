import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const SocialMedia = ({ cvLanguage }) => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);

  const t = {
    en: {
      title: "Social Media",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "Website",
    },
    de: {
      title: "Soziale Medien",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "Webseite",
    },
  };

  // social media
  const handleSocialMedia = (e, index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index][e.target.name] = e.target.value.replace(
      "https://",
      ""
    );
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  const addSocialMedia = () => {
    setResumeData({
      ...resumeData,
      socialMedia: [...resumeData.socialMedia, { socialMedia: "", link: "" }],
    });
  };

  const removeSocialMedia = (index) => {
    const newSocialMedia = [...resumeData.socialMedia];
    newSocialMedia[index] = newSocialMedia[newSocialMedia.length - 1];
    newSocialMedia.pop();
    setResumeData({ ...resumeData, socialMedia: newSocialMedia });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t[cvLanguage]?.title || t.en.title}</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder={t[cvLanguage]?.linkedin || t.en.linkedin}
          name="linkedin"
          className="pi"
          value={resumeData.linkedin}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.github || t.en.github}
          name="github"
          className="pi"
          value={resumeData.github}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.twitter || t.en.twitter}
          name="twitter"
          className="pi"
          value={resumeData.twitter}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.website || t.en.website}
          name="website"
          className="pi"
          value={resumeData.website}
          onChange={handleChange}
        />
      </div>
      {resumeData.socialMedia.map((socialMedia, index) => (
        <div key={index} className="flex-wrap-gap-2">
          <input
            type="text"
            placeholder="Social Media"
            name="socialMedia"
            className="other-input"
            value={socialMedia.socialMedia}
            onChange={(e) => handleSocialMedia(e, index)}
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            className="other-input"
            value={socialMedia.link}
            onChange={(e) => handleSocialMedia(e, index)}
          />
        </div>
      ))}
      <FormButton
        size={resumeData.socialMedia.length}
        add={addSocialMedia}
        remove={removeSocialMedia}
      />
    </div>
  );
};

export default SocialMedia;
