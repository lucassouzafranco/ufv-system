import React, { Fragment } from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import Form from '../Form';
import { Layout, Box, Title, Logo, Main, Subtitle} from './styleRegister';
import Footer from '../Footer/footer';
import DevelopedBy from '../DevelopedBy/index';

const Register = () => {
  return(
    <Fragment>
      <Layout>
        <Box>
          <Title><h1>Sejam muito bem vindos à</h1></Title>
          <Logo src={LogoPNG} alt='logo da amostra de profissões'/>
          <Subtitle>22 de outubro de 2022</Subtitle>
        </Box>
        <Main>
          <Form/>
          <Footer />
          <DevelopedBy />
        </Main>
      </Layout>
    </Fragment>
  )
}

export default Register;