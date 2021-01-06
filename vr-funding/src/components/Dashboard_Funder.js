import React from "react";
import { useHistory } from "react-router-dom";


export default function DashBoardB(props) {
  const { uList } = props;
  const history = useHistory();
  console.log('array', uList);
      return(
      <div class="container">{
          uList.map((User) => (
          <div class="container">
              <h2>email here{User.email}</h2>
              <h2>role here{User.role}</h2>
              <div class="container" onClick={() => history.push(`/components/ProjectPage`)}>Browse Projects</div>
          </div>
          
      ))
  }</div>
  )
}
