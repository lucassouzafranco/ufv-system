import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MiniCourses from "./pages/MiniCourses";

const MyRoutes = () => {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cursos' element={<Courses />} />
          <Route path='/cursos/mini-cursos' element={<MiniCourses />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default MyRoutes;