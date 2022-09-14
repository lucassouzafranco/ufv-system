import React, { Fragment } from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import logoufv from '../../assets/img/ufv-logo.png';
import Form from '../Form';
import { Layout, Box, Title, Logo, Main, UFVLogo } from './styleRegister';

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
          <UFVLogo src={logoufv} alt='logo da UFV'/>
        </Main>
      </Layout>
    </Fragment>
  )
}

export default Register;