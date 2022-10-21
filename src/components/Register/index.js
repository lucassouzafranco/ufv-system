import React, { Fragment, useEffect, useState } from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import Form from '../Form';
import { Layout, Box, Title, Logo, Main, Subtitle, Manu, FinishContainer, Finish, Go } from './styleRegister';
import Footer from '../Footer/footer';
import DevelopedBy from '../DevelopedBy/index';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const manu = false;
  const [finish, setFinish] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (manu) {
      localStorage.removeItem("@COURSES_DATA");
      localStorage.removeItem("@USER_DATA");
    }
  }, [manu]);

  useEffect(() => {
    function getDate() {
      const date = new Date();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = String(date.getFullYear());
      const newDate = `${day}/${month}/${year}`;
      if (newDate === '23/10/2022') {
        setFinish(true);
        localStorage.removeItem("@COURSES_DATA");
        localStorage.removeItem("@USER_DATA");
      }
    }
    getDate();
  }, [finish])

  return (
    <Fragment>
      {manu ?
        <Layout>
          <Box>
            <Title><h1>Sejam muito bem vindos à</h1></Title>
            <Logo src={LogoPNG} alt='logo da amostra de profissões' />
            <Subtitle>22 de outubro de 2022</Subtitle>
          </Box>
          <Main>
            <Manu>Sistema em manutenção</Manu>
            <Footer />
            <DevelopedBy />
          </Main>
        </Layout>
        :
        <Layout>
          {finish ?
            <>
            <Box>
              <Title><h1>Sejam muito bem vindos à</h1></Title>
              <Logo src={LogoPNG} alt='logo da amostra de profissões' />
              <Subtitle>22 de outubro de 2022</Subtitle>
            </Box>
            <Main>
              <FinishContainer>
                <Finish>Inscrições incerradas !!</Finish>
                <Go onClick={() => navigate('/verificar')}>Ver minha inscrição</Go>
              </FinishContainer>
              <Footer />
              <DevelopedBy/>
            </Main>
            </>
            :
            <>
              <Box>
                <Title><h1>Sejam muito bem vindos à</h1></Title>
                <Logo src={LogoPNG} alt='logo da amostra de profissões' />
                <Subtitle>22 de outubro de 2022</Subtitle>
              </Box>
              <Main>
                <Form />
                <Footer />
                <DevelopedBy />
              </Main>
            </>
          }
        </Layout>
      }
    </Fragment>
  )
}

export default Register;