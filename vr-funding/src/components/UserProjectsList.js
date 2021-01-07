import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProjects, fetchUserProjects } from "../actions/index";

import UserProject from "./UserProject";

const UserProjectsList = (props) => {
  useEffect(() => {
    props.fetchProjects();
  }, []);

  //projects.map
  //render project component
  //edit button
  //delete button
  return (
    <div>
      {props.projects.map((project) => {
        return <UserProject project={project} key={project.project_id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    userProjects: state.userProjects,
  };
};
export default connect(mapStateToProps, { fetchProjects, fetchUserProjects })(
  UserProjectsList
);
