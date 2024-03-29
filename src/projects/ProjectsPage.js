import React, { useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";

function ProjectsPage() {
  const [projects, setProjects] = useState(MOCK_PROJECTS);

  const saveProject = (createProjectObject) => {
    console.log("Saving project : ", createProjectObject);
    let updatedProjects = projects.map((p) => {
      return p.id === createProjectObject.id ? createProjectObject : p;
    });
    setProjects(updatedProjects);
  };

  return (
    // <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>
    <ProjectList onSave={saveProject} projects={projects} />
  );
}

export default ProjectsPage;
