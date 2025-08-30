import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const PersonalInformation = ({ cvLanguage }) => {
  const { resumeData, setResumeData, handleProfilePicture, handleChange } =
    useContext(ResumeContext);

  // Translation object
  const t = {
    en: {
      personalInfo: "Personal Information",
      fullName: "Full Name",
      jobTitle: "Job Title",
      contactInfo: "Contact Information",
      email: "Email",
      address: "Address",
      profilePicture: "Profile Picture"
    },
    de: {
      personalInfo: "Persönliche Angaben",
      fullName: "Vollständiger Name",
      jobTitle: "Berufsbezeichnung",
      contactInfo: "Kontaktinformation",
      email: "E-Mail",
      address: "Adresse",
      profilePicture: "Profilbild"
    }
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t[cvLanguage]?.personalInfo || t.en.personalInfo}</h2>
      <div className="grid-4">
        <input
          type="text"
          placeholder={t[cvLanguage]?.fullName || t.en.fullName}
          name="name"
          className="pi"
          value={resumeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.jobTitle || t.en.jobTitle}
          name="position"
          className="pi"
          value={resumeData.position}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.contactInfo || t.en.contactInfo}
          name="contactInformation"
          className="pi"
          value={resumeData.contactInformation}
          onChange={handleChange}
          minLength="10"
          maxLength="15"
        />
        <input
          type="email"
          placeholder={t[cvLanguage]?.email || t.en.email}
          name="email"
          className="pi"
          value={resumeData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={t[cvLanguage]?.address || t.en.address}
          name="address"
          className="pi"
          value={resumeData.address}
          onChange={handleChange}
        />
        {/* Profile Picture Preview and Input */}
        <div className="flex flex-col items-center gap-2">
          {resumeData.profilePicture && (
            <img
              src={resumeData.profilePicture}
              alt="Profile"
              className="rounded-full border-4 shadow-lg w-20 h-20 object-cover"
              style={{ borderColor: '#2563eb' }}
            />
          )}
          <input
            type="file"
            name="profileImage"
            accept="image/*"
            className="profileInput"
            onChange={handleProfilePicture}
            placeholder={t[cvLanguage]?.profilePicture || t.en.profilePicture}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
