import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./Contexts/UserContext";

const PrivateUnloggedRoute = () => {
  const { currentUser } = useAuthContext();
  return currentUser === null ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateUnloggedRoute;
