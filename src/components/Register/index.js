import React, { Fragment, useEffect } from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import Form from '../Form';
import { Layout, Box, Title, Logo, Main, Subtitle, Manu, ButtonOutline } from './styleRegister';
import Footer from '../Footer/footer';
import DevelopedBy from '../DevelopedBy/index';

const Register = () => {

  const manu = false;

  useEffect(() => {
    if(manu){
      localStorage.clear();
    }
  }, [manu])

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
        </Layout>
      }
    </Fragment>
  )
}

export default Register;