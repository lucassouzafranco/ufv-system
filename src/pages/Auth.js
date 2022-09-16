import React, { useEffect } from "react";
import Login from "../components/Login";
import { parseCookies } from 'nookies';
import { useNavigate } from "react-router-dom";

export default function Auth(){

  const navigate = useNavigate();

  useEffect(() => {
    const { react_auth_token } = parseCookies();
    if(react_auth_token){
      navigate('/admin/painel');
    }
  }, [navigate])

  return(
    <>
      <Login/>
    </>
  )
}