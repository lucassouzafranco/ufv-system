import React from "react";
import { Container, Content, Title, Form, Input, Button } from './loginStyle';

export default function Login() {
  return (
    <>
      <Content>
        <Container>
          <Title>Bem vindo(a), administrador!</Title>
          <Form>
            <Input
              type='text'
              placeholder="email"
            />
            <Input
              type='password'
              placeholder="senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
        </Container>
      </Content>
    </>
  )
}