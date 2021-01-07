import React from "react";
import "../App.css";

const UserProject = ({ project }) => {
  const handleEdit = (e) => {
    console.log("click!");
  };

  const handleDelete = (e) => {
    console.log("click");
  };

  return (
    <div className="project-card-container">
      <div>{project.project_title}</div>
      <div>{project.project_description}</div>
      <div>{project.project_type}</div>
      <div>{project.mission_statement}</div>
      <div>{project.funding_amount}</div>
      <div>{project.amount_raised}</div>
      <div>{project.project_timeline}</div>
      <button onClick={handleEdit}>Edit Project</button>
      <button onClick={handleDelete}>Delete Project</button>
    </div>
  );
};

export default UserProject;
