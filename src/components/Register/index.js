import React, { Fragment } from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import Form from '../Form';
import { Layout, Box, Title, Logo, Main } from './styleRegister';
import Footer from '../Footer/footer';

const Register = () => {
  return(
    <Fragment>
      <Layout>
        <Box>
          <Title><h1>Sejam muito bem vindos à</h1></Title>
          <Logo src={LogoPNG} alt='logo da amostra de profissões'/>
        </Box>
        <Main>
          <Form/>
          <Footer />
        </Main>
      </Layout>
    </Fragment>
  )
}

export default Register;