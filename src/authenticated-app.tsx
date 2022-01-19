import { useAuth } from "context/auth-context";
import { ProjectList } from "project-list";
import React from "react";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
       <ProjectList />
    </div>
  );
};
