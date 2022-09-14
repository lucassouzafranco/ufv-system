import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import MiniCourses from "./pages/MiniCourses";
import DashBoard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import Subscription from "./pages/Subscription";

const MyRoutes = () => {

  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cursos' element={<Courses />} />
          <Route path='/cursos/mini-cursos' element={<MiniCourses />} />
          <Route path='/admin' element={<Auth />} />;
          <Route path='/admin/painel' element={<DashBoard />} />;
          <Route path='/admin/painel/cadastrar' element={<DashBoard />} />;
          <Route path='/inscricao' element={<Subscription />} />;
        </Routes>
      </Router>
    </Fragment>
  )
}

export default MyRoutes;