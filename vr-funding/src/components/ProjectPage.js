import React from "react";
import { useRouteMatch } from "react-router-dom";


export default function ProjectList(props) {
  const { projects } = props;
  
  const { url } = useRouteMatch();

  return (
    <div className="project-list">
      {projects.map(

        (project) => (
          <div className="project-card" key={project.id}>
            
              {/* <Link to={`${url}/${project.id}`}> */}
              <div className="project-card"><p>{project.title}</p></div>
              {/* </Link> */}

            <div className="project-card"><p>{project.discription}</p></div>

            <div className="project-card"><p>Click Here to Fund!</p></div>
          </div>
         
            )
        )
      }
    </div>
  );
}


