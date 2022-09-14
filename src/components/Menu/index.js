import React from 'react';
import { Nav, Title, Button, Area, AmostraLogo} from './styleMenu';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';
import Logo from '../../assets/img/logodaamostra.png'

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

      { variant === 'confirm' && (
        <Area>
          <AmostraLogo url={Logo}/>
        </Area>
      )}
    </>
  )
}