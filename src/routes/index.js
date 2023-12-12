import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
