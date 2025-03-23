import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Content from "./components/Content";
import Register from "./components/Register";
import Example from "./components/Example";

const AppRoutes = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Content />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route
        path="/logout"
        element={<Logout setIsLoggedIn={setIsLoggedIn} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Example />} />x
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
