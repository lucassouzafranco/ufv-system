import React, { useEffect, useState } from 'react';
import { Button, Content, CookiesContainer, CookiesContent } from './cookiesStyle';

export default function Cookies() {

  const [cookies, setCookies] = useState(false);

  useEffect(() => {
    const cookie = localStorage.getItem("cookies");
    if (cookie) {
      setCookies(Boolean(cookie));
    }
  }, []);

  async function handleCookies() {
    console.log("Entrou");
    setCookies(true);
    localStorage.setItem("cookies", true);
  }

  return (
    <>
      {!cookies && (
        <CookiesContainer>
          <CookiesContent>
            <Content>Nós armazenamos dados temporários para melhorar a experiência de navegação. Ao utilizar tais serviços, você concorda com o uso de cookies. </Content>
            <Button onClick={() => handleCookies()}>Aceitar</Button>
          </CookiesContent>
        </CookiesContainer>
      )}
    </>
  )
}