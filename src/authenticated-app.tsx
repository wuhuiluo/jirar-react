import { useAuth } from "context/auth-context";
import React from "react";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      1234
    </div>
  );
};