import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { Form, Input, Card, Checkbox, Radio, Button } from "antd";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup = () => {
  const { push } = useHistory();
  const [form] = Form.useForm();

  const handleChange = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    console.log(e);

    const newUser = {
      first_name: e.first_name.trim(),
      last_name: e.last_name.trim(),
      email: e.email.trim(),
      password: e.password.trim(),
      role: e.role,
    };

    axios
      .post("https://vr-fund.herokuapp.com/account/signup", newUser)
      .then((res) => {
        push("/Login");
      })
      .catch((err) => {
        console.log(err);
      });

    form.resetFields();
  };

  return (
    <div className="signup-form-container">
      <Card title="Sign Up!" style={{ width: 400 }}>
        <Form
          {...formItemLayout}
          form={form}
          name="signup"
          onFinish={handleSubmit}
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm: "",
            role: "1",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="first_name"
            label="First Name"
            rules={[
              {
                required: true,
                message: "Please enter first name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="last_name"
            label="Last Name"
            rules={[
              {
                message: "Please enter last name",
              },
              {
                required: true,
                message: "Please enter last name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "Please enter a valid E-mail",
              },
              {
                required: true,
                message: "Please enter your E-mail",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject("Passwords do not match");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="role"
            rules={[
              {
                required: true,
                message: "Please select a role",
              },
            ]}
            {...tailFormItemLayout}
          >
            <Radio.Group onChange={handleChange} value={""}>
              <Radio value={1}>Fundraiser</Radio>
              <Radio value={2}>Funder</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Please accept agreement"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
