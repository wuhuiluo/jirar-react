import { Card } from "antd";
import React, { useState } from "react";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import styled from "@emotion/styled";
export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <button onClick={() => setIsRegister(!isRegister)}>
          切换到{isRegister ? "登陆" : "注册"}
        </button>
      </Card>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
