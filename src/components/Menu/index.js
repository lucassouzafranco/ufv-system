import React from 'react';
import { Nav, Title, Button } from './styleMenu';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';

export default function Menu({ user, variant }) {

  const navigate = useNavigate();

  return (
    <>
      {variant === 'courses' && (
        <Nav>
          <Button onClick={() => navigate('/')}>Voltar</Button>
          <Title>Escolha 2 cursos</Title>
          <Avatar name={user.name} />
        </Nav>
      )}
      {variant === 'mini' && (
        <Nav>
          <Button onClick={() => navigate('/cursos')}>Voltar</Button>
          <Title>Escolha o que deseja fazer</Title>
          <Avatar name={user.name} />
        </Nav>
      )}
    </>
  )
}