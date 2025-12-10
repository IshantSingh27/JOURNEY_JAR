import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/home"
import Login from "./pages/Auth/login"
import SignUp from "./pages/Auth/Signup"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/" exact element={<Home />} />
          </Route>

          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App