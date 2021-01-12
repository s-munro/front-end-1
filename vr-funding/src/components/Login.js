import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { setId, setRole } from "../actions/index";

import { Card, Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/lib/form";

import "../App.css";

const schema = yup.object().shape({
  email: yup.string().required("Email field is required."),
  password: yup
    .string()
    .required("Password field is required.")
    .min(8, "Password must be at least 8 characters."),
});

const initialLoginValues = { email: "", password: "" };
const initialLoginErrors = {
  username: "",
  password: "",
};

const initialDisabled = true;

const Login = (props) => {
  const [form] = Form.useForm();
  const { push } = useHistory();

  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const loginSubmit = (e) => {
    const user = e.user;

    axios
      .post("https://vr-fund.herokuapp.com/account/login", user)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("role", res.data.role);
        window.localStorage.setItem("id", res.data.id);
        props.setRole(res.data.role);
        props.setId(res.data.id);
        setLoginValues(initialLoginValues);
        push("/");
      })
      .catch((err) => {
        setLoginValues(initialLoginValues);
      });
    form.resetFields();
  };
  return (
    <div className="login-container">
      <Card title="Welcome!" style={{ width: 300 }}>
        <Form
          name="login"
          className="login-form"
          initialValues={{ user: "", password: "" }}
          onFinish={loginSubmit}
          form={form}
        >
          <Form.Item
            name={["user", "email"]}
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name={["user", "password"]}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <br />
            Or <a href="http://localhost:3001/signup">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    role: state.role,
    id: state.id,
  };
};

export default connect(mapStateToProps, { setId, setRole })(Login);
