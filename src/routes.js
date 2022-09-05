import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const MyRoutes = () => {
  return(
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default MyRoutes;