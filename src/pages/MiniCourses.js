import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import MiniCoursesC from "../components/MiniCourses";

export default function MiniCourses() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@USER_DATA"));
    const courses = JSON.parse(localStorage.getItem("@COURSES_DATA"));
    if (!(user && courses)) {
      if(!user){
        navigate('/');
      }
      if(!courses){
        navigate('/cursos');
      }
    } else {
      setUser(user);
      setCourses(courses);
    }
  }, [navigate]);

  return (
    <>
      <Menu user={user} variant='mini' />
      <MiniCoursesC courses={courses} />
    </>
  )
}