import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

export default function LoginScreen() {
  const { login, user } = useAuth();
  console.log(user);
  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    login({ username, password });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="username">用户名</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
}
