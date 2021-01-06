import React from "react";
import { useHistory } from "react-router-dom";

const mockList = [
  {
    email: "sam@sam.com",
    role: "2",
  },
];

export default function DashboardFundraiser(props) {
  // const { uList } = props;
  const history = useHistory();

  return (
    <div class="container">
      {mockList.map((User) => (
        <div class="container">
          <h2>email here{User.email}</h2>
          <h2>role here{User.role}</h2>
          <div
            class="container"
            onClick={() => history.push(`/components/CreateProject`)}
          >
            Create Project
          </div>
        </div>
      ))}
    </div>
  );
}
