import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import ChartPage from "../pages/ChartPage";
import ResetPinPage from "../pages/ResetPinPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="settingPin" element={<ResetPinPage />} />
      <Route path="chart" element={<ChartPage />} />
    </Routes>
  );
};

export default Router;
