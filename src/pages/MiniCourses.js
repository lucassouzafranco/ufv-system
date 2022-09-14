import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import MiniCoursesC from "../components/MiniCourses";

export default function MiniCourses() {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [cou, setCou] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function course() {
      setLoading(true);
      const user = await JSON.parse(localStorage.getItem("@USER_DATA"));
      const courses = await JSON.parse(localStorage.getItem("@COURSES_DATA"));
      if (!(user && courses)) {
        if (!user) {
          navigate('/');
        }
        if (!courses) {
          navigate('/cursos');
        }
      } else {
        setUser(user);
        setCou(courses);
      }
    }
    course();
  }, [navigate]);

  return (
    <>
      <Menu user={user} variant='mini' />
      {loading && (<MiniCoursesC courses={cou} />)}
    </>
  )
}