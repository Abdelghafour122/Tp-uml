import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./Contexts/UserContext";

function PrivateLoggedRoute() {
  const { currentUser } = useAuthContext();
  return currentUser !== null ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateLoggedRoute;
