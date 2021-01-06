import React from "react";
import { useHistory } from "react-router-dom";



const DashBoardB = () => {
  const history = useHistory();
  return <div class="container">
<div class="container">
<p>
 BBB Fundser dynamic - user, role info
</p>
</div>
<div class="container" onClick={() => history.push(`/components/ProjectPage`)}>Browse Projects</div>
</div>;
};

export default DashBoardB;



