import React from "react";
import ProjectList from "./ProjectList";
import { MOCK_PROJECTS } from "./MockProjects";

function ProjectsPage() {
  const saveProject = (project) => {
    console.log("Saving project : ", project);
  };

  return (
    // <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>
    <ProjectList projects={MOCK_PROJECTS} onSave={saveProject} />
  );
}

export default ProjectsPage;
