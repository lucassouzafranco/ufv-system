import React from 'react';
import { Nav, Title, Button } from './styleMenu';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';

export default function Menu({ user }) {

  const navigate = useNavigate();

  return (
    <>
      <Nav> 
        <Button onClick={() => navigate('/')}>Voltar</Button>
        <Title>Escolha 2 cursos</Title>
        <Avatar name={user.name} />
      </Nav>
    </>
  )
}