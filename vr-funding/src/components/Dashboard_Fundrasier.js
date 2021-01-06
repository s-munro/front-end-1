import React from "react";
import { useHistory } from "react-router-dom";



const DashBoardA = () => {
  const history = useHistory();
  return <div class="container">
<div class="container">
<p>
 AAA Funderaiser dynamic -user, role info 
</p>
</div>
<div class="container" onClick={() => history.push(`/components/CreateProject`)}>Create Project</div>
</div>;
};

export default DashBoardA;



