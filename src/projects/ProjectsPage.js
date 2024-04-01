import React, { Fragment, useState, useEffect } from "react";
import { projectAPI } from "./projectAPI";
import ProjectList from "./ProjectList";
import { Project } from "./Project";
import ProjectDetail from "./ProjectDetail";
import ProjectListSkeleton from "./ProjectListSkeleton";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        setError(null);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const saveProject = (createProjectObject) => {
    console.log("Saving project : ", createProjectObject);
    // let updatedProjects = projects.map((p) => {
    //   return p.id === createProjectObject.id ? createProjectObject : p;
    // });
    // setProjects(updatedProjects);
    projectAPI
      .put(createProjectObject)
      .then((updatedProject) => {
        let updatedProjects = projects.map((p) => {
          return p.id === createProjectObject.id
            ? new Project(updatedProject)
            : p;
        });
        setProjects(updatedProjects);
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <Fragment>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      {loading && <ProjectListSkeleton />}
      <ProjectList onSave={saveProject} projects={projects} />
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span> {error}
              </p>
            </section>
          </div>
        </div>
      )}

      {Project && <ProjectDetail project={projects} />}
    </Fragment>
  );
}

export default ProjectsPage;
