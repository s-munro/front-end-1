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
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          {/* <Link to={`${url}/${project.id}`}> */}
          <div className="project-card">
            <p>{project.title}</p>
          </div>
          {/* </Link> */}

          <div className="project-card">
            <p>{project.discription}</p>
          </div>

          <div className="project-card">
            <p>Click Here to Fund!</p>
          </div>
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
  };
};
export default connect(mapStateToProps, { fetchProjects })(ProjectList);
