import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import New from "../pages/New/index";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/index";
import Details from "../pages/Details/index";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
