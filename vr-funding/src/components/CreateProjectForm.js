import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { fetchProjects } from "../actions/index";

const initialFormValues = {
  project_title: "",
  project_type: "",
  mission_statement: "",
  project_description: "",
  funding_amount: "",
  amount_raised: "",
  project_timeline: "",
};

const CreateProjectForm = (props) => {
  const [values, setValues] = useState(initialFormValues);

  const history = useHistory();

  const onChange = (evt) => {
    evt.persist();
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newProject = {
      project_title: values.project_title,
      project_type: values.project_type,
      mission_statement: values.mission_statement,
      project_description: values.mission_statement,
      funding_amount: parseInt(values.funding_amount),
      amount_raised: parseInt(values.amount_raised),
      project_timeline: values.project_timeline,
    };

    axiosWithAuth()
      .post("projects", newProject)
      .then((res) => {
        setValues(initialFormValues);
        props.fetchProjects();
        history.push("/projects");
      })
      .catch((err) => {
        setValues(initialFormValues);
      });
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group-inputs">
        <label>
          Project Title
          <input
            type="text"
            name="project_title"
            onChange={onChange}
            value={values.project_title}
            placeholder="Project Title"
            maxLength="20"
          ></input>
        </label>
        <label>
          Project Type
          <input
            type="text"
            name="project_type"
            onChange={onChange}
            value={values.project_type}
            placeholder="Project Type"
            maxLength="20"
          ></input>
        </label>
        <label>
          Mission Statement
          <input
            type="text"
            name="mission_statement"
            onChange={onChange}
            value={values.mission_statement}
            placeholder="Mission Statement"
            maxLength="100"
          ></input>
        </label>
        <label>
          Project Description
          <input
            type="text"
            name="project_description"
            onChange={onChange}
            value={values.project_description}
            placeholder="Project Description"
            maxLength="100"
          ></input>
        </label>
        <label>
          Funding Amount
          <input
            type="text"
            name="funding_amount"
            onChange={onChange}
            value={values.funding_amount}
            placeholder="Funding Amount"
            maxLength="20"
          ></input>
        </label>
        <label>
          Amount Raised
          <input
            type="text"
            name="amount_raised"
            onChange={onChange}
            value={values.amount_raised}
            placeholder="Amount Raised"
            maxLength="20"
          ></input>
        </label>
        <label>
          Project Timeline
          <input
            type="text"
            name="project_timeline"
            onChange={onChange}
            value={values.project_timeline}
            placeholder="ProjectTimeline"
            maxLength="20"
          ></input>
        </label>
      </div>
      <div className="submit">
        <button>Submit</button>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    errorText: state.errorText,
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps, { fetchProjects })(CreateProjectForm);
