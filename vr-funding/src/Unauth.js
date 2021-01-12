import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

const Unauth = () => {
  const history = useHistory();

  const handleHome = (e) => {
    history.push("/login");
  };

  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you do not have permission to access this page"
        extra={
          <Button onClick={handleHome} type="primary">
            Back to Login
          </Button>
        }
      />
    </div>
  );
};

export default Unauth;
