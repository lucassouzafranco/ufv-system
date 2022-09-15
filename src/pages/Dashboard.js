import React, { useEffect } from "react";
import DashBoardC from "../components/Dashboard";
import { parseCookies } from 'nookies';
import { useNavigate } from "react-router-dom";

export default function DashBoard(){

  document.title = "Dashboard - Mostra de profissões";
  const navigate = useNavigate();

  useEffect(() => {
    const { react_auth_token } = parseCookies();
    if(!react_auth_token){
      navigate('/admin');
    }
  }, [navigate])

  return(
    <>
      <DashBoardC />
    </>
  )
}