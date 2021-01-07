import React from "react";
import { connect } from "react-redux";
import { setEditing } from "../actions/index";

const EditProjectForm = (props) => {
  const targetProject = props.editedProject;

  const handleChanges = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <form className="form container" onSubmit={handleSubmit}>
        <div className="form-group-inputs">
          <label>
            Project Title
            <input
              type="text"
              name="project_title"
              onChange={handleChanges}
              value={targetProject.project_title}
              placeholder="Project Title"
              maxLength="20"
            ></input>
          </label>
          <label>
            Project Type
            <input
              type="text"
              name="project_type"
              onChange={handleChanges}
              value={targetProject.project_type}
              placeholder="Project Type"
              maxLength="20"
            ></input>
          </label>
          <label>
            Mission Statement
            <input
              type="text"
              name="mission_statement"
              onChange={handleChanges}
              value={targetProject.mission_statement}
              placeholder="Mission Statement"
              maxLength="100"
            ></input>
          </label>
          <label>
            Project Description
            <input
              type="text"
              name="project_description"
              onChange={handleChanges}
              value={targetProject.project_description}
              placeholder="Project Description"
              maxLength="100"
            ></input>
          </label>
          <label>
            Funding Amount
            <input
              type="text"
              name="funding_amount"
              onChange={handleChanges}
              value={targetProject.funding_amount}
              placeholder="Funding Amount"
              maxLength="20"
            ></input>
          </label>
          <label>
            Amount Raised
            <input
              type="text"
              name="amount_raised"
              onChange={handleChanges}
              value={targetProject.amount_raised}
              placeholder="Amount Raised"
              maxLength="20"
            ></input>
          </label>
          <label>
            Project Timeline
            <input
              type="text"
              name="project_timeline"
              onChange={handleChanges}
              value={targetProject.project_timeline}
              placeholder="ProjectTimeline"
              maxLength="20"
            ></input>
          </label>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    role: "",
    editedProject: {
      amount_raised: state.editedProject.amount_raised,
      funding_amount: state.editedProject.funding_amount,
      mission_statement: state.editedProject.mission_statement,
      owner_id: state.editedProject.owner_id,
      project_description: state.editedProject.project_description,
      project_id: state.editedProject.project_id,
      project_timeline: state.editedProject.project_timeline,
      project_title: state.editedProject.project_title,
      project_type: state.editedProject.project_type,
    },
  };
};

export default connect(mapStateToProps, { setEditing })(EditProjectForm);