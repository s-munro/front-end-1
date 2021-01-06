import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialFormValues = {
  project_title: "",
  project_type: "",
  mission_statement: "",
  project_description: "",
  funding_amount: "",
  amount_raised: "",
  project_timeline: "",
};

export default function CreateProjectForm(props) {
  const [values, setValues] = useState(initialFormValues);

  const onChange = (evt) => {
    evt.persist();
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("projects", values)
      .then((res) => {
        console.log("res: ", res);
        setValues(initialFormValues);
      })
      .catch((err) => {
        console.log("err: ", err);
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
        <button>submit</button>
      </div>
    </form>
  );
}
