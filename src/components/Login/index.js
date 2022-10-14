import React, { useState } from "react";
import { Container, Content, Title, Form, Input, Button, Footer, Credits } from './loginStyle';
import axios from "axios";
import { setCookie } from 'nookies';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email.trim(),
      senha: password.trim()
    }
    await axios.post('https://api.mostra.crp.ufv.br/auth', data)
      .then(response => {
        const { token } = response.data;
        if (token) {
          setCookie(null, 'react_auth_token', token, {
            maxAge: 86400 * 1
          })
          navigate('/admin/painel');
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <>
      <Content>
        <Container>
          <Title>Bem vindo(a), administrador!</Title>
          <Form
            onSubmit={handleSubmit}
          >
            <Input
              required
              onChange={event => setEmail(event.target.value)}
              value={email}
              type='text'
              placeholder="email"
            />
            <Input
              required
              onChange={event => setPassword(event.target.value)}
              value={password}
              type='password'
              placeholder="senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
          <Footer>
            <Credits>Desenvolvido com ❤️ por <a style={{ textDecoration: 'none', color: '#114977', fontWeight: 'bold' }} href="https://infoalto.com.br/" target='_blank' rel="noreferrer">InfoAlto Empresa Júnior.</a>
            </Credits>
          </Footer>
        </Container>
      </Content>
    </>
  )
}