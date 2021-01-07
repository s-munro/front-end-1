import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { connect } from "react-redux";
import { fetchProjects } from "../actions/index";

const ProjectList = (props) => {
  const { projects } = props;

  const { url } = useRouteMatch();

  useEffect(() => {
    return props.fetchProjects();
  }, []);

  return (
    <div className="project-list">
      <div>
        {props.errorText !== null ? <div>{props.errorText}</div> : null}
      </div>

      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          {/* <Link to={`${url}/${project.id}`}> */}
          <div className="project-card">
            <p>{project.project_title}</p>
          </div>
          {/* </Link> */}

          <div className="project-card">
            <p>{project.project_description}</p>
          </div>

          <div className="project-card">
            <p>
              Mission Statement: <br />
              {project.mission_statement}
            </p>
          </div>

          <div className="project-card">
            <p>Timeline: {project.project_timeline}</p>
          </div>

          <div className="project-card">
            <p>
              ${project.amount_raised}/${project.funding_amount}
            </p>
          </div>
          {props.role === 2 ? (
            <div className="project-card">
              <p>Click Here to Fund!</p>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    errorText: state.errorText,
    projects: state.projects,
    role: state.role,
  };
};
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
