import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {
  DasboardComponent,
  RegisterComponent,
  LoginComponent,
  Home,
} from "../modules";

const NotFound = () => {
  return <h1>Not Found</h1>;
};

const AppRoutes = (props) => {
  const { isUserRegistered, isUserLoggedIn } = props;

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={(!isUserRegistered && !isUserLoggedIn && <Home />) || (<Navigate replace to={"/user/login"} />)} />
        <Route path="/user/register" exact element={<RegisterComponent />} />
        <Route path="/user/login" exact element={<LoginComponent />} />
        <Route path="/dashboard" exact element={<DasboardComponent />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
