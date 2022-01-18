import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";
export default function LoginScreen() {
  const { login, user } = useAuth();
  console.log(user);
  const handlerSubmit = (values: { username: string; password: string }) => {
    login(values);
  };

  return (
    <div>
      <Form onFinish={handlerSubmit}>
        <Form.Item
          rules={[{ required: true, message: "请输入用户名" }]}
          name={"username"}
        >
          <Input placeholder={"用户名"} type="text" id={"username"} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "请输入密码" }]}
          name={"password"}
        >
          <Input placeholder={"密码"} type="password" id={"password"} />
        </Form.Item>
        <Form.Item>
          <Button htmlType={"submit"} type={"primary"}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
