import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setRole, fetchUserProjects } from "../actions/index";

import UserProjectsList from "./UserProjectsList";

const mockList = [
  {
    email: "sam@sam.com",
    role: "2",
  },
];

const DashboardFundraiser = (props) => {
  // const { uList } = props;
  const history = useHistory();

  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    props.setRole();
    props.fetchUserProjects(window.localStorage.getItem("id"));
  }, []);

  const handleClick = (e) => {
    setProjectsVisible(!projectsVisible);
  };

  return (
    <div>
      <div class="container">
        {mockList.map((User) => (
          <div class="container">
            <h2>email here{User.email}</h2>
            <h2>role here {props.role}</h2>
            <div
              class="container"
              onClick={() => history.push("/createproject")}
            >
              Create Project
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Load My Projects</button>
      {projectsVisible === true ? <UserProjectsList /> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    id: state.id,
    role: state.role,
    userProjects: state.userProjects,
  };
};
export default connect(mapStateToProps, { setRole, fetchUserProjects })(
  DashboardFundraiser
);
