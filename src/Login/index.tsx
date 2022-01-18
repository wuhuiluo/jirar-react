import React, { FormEvent } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

export default function Index() {
  const login = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };

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
