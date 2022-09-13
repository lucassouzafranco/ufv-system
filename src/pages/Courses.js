import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import CoursesC from '../components/Courses';
import { useNavigate } from 'react-router-dom';

const Courses = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@USER_DATA"));
    if(!user){
      navigate('/');
    }else{
      setUser(user);
    }
  }, [navigate])

  return (
    <>
      <Menu user={user} variant='courses' />
      <CoursesC/>
    </>
  )
}

export default Courses;