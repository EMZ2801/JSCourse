import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectionRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? <> {children} </> : <Navigate to="/Registr" replace />;
};
