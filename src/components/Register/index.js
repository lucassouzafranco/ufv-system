import React from 'react';

import LogoPNG from '../../assets/img/logodaamostra.png';
import logoufv from '../../assets/img/ufv-logo.png';
import Form from '../Form';
import { Layout, Box, Logo, Main, UFVLogo } from './style';

export default function Register(){
  return(
    <>
      <Layout>
        <Box>
          <Logo src={LogoPNG} />
        </Box>
        <Main>
          <Form/>
          <UFVLogo src={logoufv} />
        </Main>
      </Layout>
    </>
  )
}