import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import { connect } from "react-redux";
import { fetchProjects } from "../actions/index";
import styled from "styled-components";

const ProjListStyled = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-between;

`;

const ProjStyledA = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-between;
  color: ${(pr) => pr.theme.secondaryColor};
  font-size: "2rem";
  font-weight: normal;
`;

const ProjStyledB = styled.div` 
  color: ${(pr) => pr.theme.secondaryColor};
  font-size: "1.5rem";
  font-weight: normal;
`;

const ProjectList = (props) => {
  const { projects } = props;

  const { url } = useRouteMatch();

  useEffect(() => {
    return props.fetchProjects();
  }, []);

  return (

    <ProjListStyled>
      <div className="project-list">
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
  </ProjListStyled>
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
