import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Auth/login";
import SignUp from "./pages/Auth/Signup";

const App = () => {
  return (
    <>
      <h2 style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
        App is working!
      </h2>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
