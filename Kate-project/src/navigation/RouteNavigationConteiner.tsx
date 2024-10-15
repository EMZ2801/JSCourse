import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProtectedRoute } from "../navigation/ProtectionRoute";

export const RoutNavigationContainer: FC = () => {
  return (
    <Routes>
      <Route path="SignUp" element={<SignUp />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
