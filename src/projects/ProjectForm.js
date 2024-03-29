import React, { useState } from "react";
import propTypes from "prop-types";
import { Project } from "./Project";

function ProjectForm({ onSave, onCancel, project: initialProject }) {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    budget: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(project);
  };
  const handleChange = (event) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === "checkbox" ? checked : value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }
    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };
  function validate(project) {
    let errors = { name: "", description: "", budget: "" };
    if (project.name.length === 0) {
      errors.name = "Name is required";
    }
    if (project.name.length > 0 && project.name.length < 3) {
      errors.name = "Name needs to be at least 3 characters.";
    }
    if (project.description.length === 0) {
      errors.description = "Description is required.";
    }
    if (project.budget === 0) {
      errors.budget = "Budget must be more than $0.";
    }
    return errors;
  }

  function isValid() {
    return (
      errors.name.length === 0 &&
      errors.description.length === 0 &&
      errors.budget.length === 0
    );
  }
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={project.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Project Description</label>
      <textarea name="description" placeholder="enter description" />
      value={project.description}
      onChange={handleChange}
      <label htmlFor="budget">Project Budget</label>
      <input type="number" name="budget" placeholder="enter budget" />
      value={project.budget}
      onChange={handleChange}
      <label htmlFor="isActive">Active?</label>
      <input type="checkbox" name="isActive" />
      checked={project.isActive}
      onChange={handleChange}
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}
ProjectForm.propTypes = {
  project: propTypes.instanceOf(Project),
  onSave: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
};
export default ProjectForm;
