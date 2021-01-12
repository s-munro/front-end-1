import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProjects, fetchUserProjects } from "../actions/index";

import UserProject from "./UserProject";
import NoData from "../NoData";

const UserProjectsList = (props) => {
  //projects.map
  //render project component
  //edit button
  //delete button
  return (
    <div>
      {props.userProjects.map((project) => {
        return (
          <div>
            <UserProject project={project} key={project.project_id} />
            <br />
          </div>
        );
      })}
      {props.userProjects.length > 0 ? null : <NoData />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.id,
    projects: state.projects,
    userProjects: state.userProjects,
    role: state.role,
  };
};
export default connect(mapStateToProps, { fetchProjects, fetchUserProjects })(
  UserProjectsList
);
