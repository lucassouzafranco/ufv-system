import React, { useState } from 'react';
import {
  Form,
  Menu,
  Logo,
  Layout,
  CardEmail,
  Input,
  Button,
  Title,
  EmailTitle,
  CardStatus,
  Status,
  StatusTitle,
  EmailStatus,
  Nome,
  Email,
  Escola,
  Data,
  Telefone,
  Erro,
  MiniCursoContainer,
  MiniCTitle,
  Information,
  MiniCourseName,
  Time,
  Place,
  Footer,
  Credits
} from '../styles/verificarStyle';
import axios from 'axios';

export default function Verificar() {

  const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  document.title = "Verifique sua inscrição - Mostra 2022";

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [email, setEmail] = useState('');
  const [miniC, setMiniC] = useState([]);
  const [userData, setUserData] = useState(null);
  const [erro, setErro] = useState({ erroMail: false });

  async function handleSubmit(event) {
    setErro({ erroMail: false });
    setLoading(false);
    event.preventDefault();
    const emailData = email.trim();
    if (!(regExpEmail.test(emailData))) {
      setErro({ erroMail: true });
      return;
    }
    axios.post('https://api.mostra.crp.ufv.br/inscricao/verificar', { email: emailData })
      .then((response) => {
        const { status } = response.data;
        const { result } = response.data;
        setMiniC(result[0].mini_cursos);
        setUserData(result);
        setStatus(status);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(true));
  }

  return (
    <>
      <Menu>
        <Logo src='/assets/img/logo.png' />
      </Menu>
      <Layout>
        <Title>Verifique sua inscrição.</Title>
        <CardEmail>
          <EmailTitle>Informe seu email usado na inscrição.</EmailTitle>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={event => setEmail(event.target.value)}
              value={email}
              required
              type='email'
              placeholder='Email'
            />
            <Button type='submit'>Verificar</Button>
          </Form>
          {erro.erroMail && (<Erro>Email inválido.</Erro>)}
        </CardEmail>
        {loading && (
          <>
            <CardStatus>
              <StatusTitle>
                <div>
                  Estado: <Status inscrito={status}>{status ? 'Inscrito' : 'Não está inscrito'}</Status>
                </div>
                {status ?
                  <>
                    <div
                      style={{
                        margin: '0.4em 0'
                      }}
                    >
                      Nome:  <Nome>{userData[0].nome}</Nome>
                    </div>
                    <div
                      style={{
                        margin: '0.4em 0'
                      }}
                    >
                      Email:  <Email>{userData[0].email}</Email>
                    </div>
                    <div
                      style={{
                        margin: '0.4em 0'
                      }}
                    >
                      Telefone:  <Telefone>{userData[0].telefone}</Telefone>
                    </div>
                    <div
                      style={{
                        margin: '0.4em 0'
                      }}
                    >
                      Escola: <Escola>{userData[0].escola}</Escola>
                    </div>
                    <div
                      style={{
                        margin: '0.4em 0'
                      }}
                    >
                      Data da inscrição: <Data>{userData[0].data}</Data>
                    </div>
                    <MiniCursoContainer>
                      <MiniCTitle>Mini Cursos</MiniCTitle>
                      <Information>
                        {miniC.map(item => (
                          <>
                            <MiniCourseName>{item.nome_mini_curso}</MiniCourseName>
                            <Time>{item.horario}</Time>
                            <Place>{item.sala}</Place>
                          </>
                        ))}
                      </Information>
                    </MiniCursoContainer>
                  </>
                  :
                  <>
                    <EmailStatus>Este email não está inscrito.</EmailStatus>
                  </>
                }
              </StatusTitle>
            </CardStatus>
          </>
        )}
        <Footer>
          <Credits>Desenvolvido com ❤️ por <a style={{ textDecoration: 'none', color: '#114977', fontWeight: 'bold' }} href="https://infoalto.com.br/" target='_blank' rel="noreferrer">InfoAlto Empresa Júnior.</a></Credits>
        </Footer>
      </Layout>
      
    </>
  )
}