import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Projects = ({ cvLanguage }) => {
  const { resumeData, setResumeData, handleChange } = useContext(ResumeContext);

  const t = {
    en: {
      title: "Projects",
      name: "Project Name",
      link: "Link",
      description: "Description",
      keyAchievements: "Key Achievements",
      startYear: "Start Year",
      endYear: "End Year",
    },
    de: {
      title: "Projekte",
      name: "Projektname",
      link: "Link",
      description: "Beschreibung",
      keyAchievements: "Hauptleistungen",
      startYear: "Anfangsjahr",
      endYear: "Endjahr",
    },
  };

  const handleProjects = (e, index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index][e.target.name] = e.target.value;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProjects = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          title: "",
          link: "",
          description: "",
          keyAchievements: "",
          startYear: "",
          endYear: "",
        },
      ],
    });
  };

  const removeProjects = (index) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = newProjects[newProjects.length - 1];
    newProjects.pop();
    setResumeData({ ...resumeData, projects: newProjects });
  };

  return (
    <div className="flex-col-gap-2">
      <h2 className="input-title">{t[cvLanguage]?.title || t.en.title}</h2>
      {resumeData.projects.map((project, index) => (
        <div key={index} className="f-col">
          <input
            type="text"
            placeholder={t[cvLanguage]?.name || t.en.name}
            name="name"
            className="w-full other-input"
            value={project.name}
            onChange={(e) => handleProjects(e, index)}
          />
          <input
            type="text"
            placeholder={t[cvLanguage]?.link || t.en.link}
            name="link"
            className="w-full other-input"
            value={project.link}
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            type="text"
            placeholder={t[cvLanguage]?.description || t.en.description}
            name="description"
            className="w-full other-input h-32"
            value={project.description}
            maxLength="250"
            onChange={(e) => handleProjects(e, index)}
          />
          <textarea
            type="text"
            placeholder={
              t[cvLanguage]?.keyAchievements || t.en.keyAchievements
            }
            name="keyAchievements"
            className="w-full other-input h-40"
            value={project.keyAchievements}
            onChange={(e) => handleProjects(e, index)}
          />
          <div className="flex-wrap-gap-2">
            <input
              type="date"
              placeholder={t[cvLanguage]?.startYear || t.en.startYear}
              name="startYear"
              className="other-input"
              value={project.startYear}
              onChange={(e) => handleProjects(e, index)}
            />
            <input
              type="date"
              placeholder={t[cvLanguage]?.endYear || t.en.endYear}
              name="endYear"
              className="other-input"
              value={project.endYear}
              onChange={(e) => handleProjects(e, index)}
            />
          </div>
        </div>
      ))}
      <FormButton
        size={resumeData.projects.length}
        add={addProjects}
        remove={removeProjects}
      />
    </div>
  );
};

export default Projects;
