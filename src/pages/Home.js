import React from 'react';
import BackgroundHome from '../components/Background/Background';
import styled from 'styled-components';
import Logo from '../assets/img/logodaamostra.png';
import Form from '../components/Form/Form';

const HomeContainer = styled.div`
  width: 100%;
  height: 91%;
`;

const WelcomeCover = styled.div`
  width: 40%;
  height: 100%;
  background-color: #682A2C;
`;

const CoverLogo = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50%;

  img{
    width: 60%;
  }
`;


const Home = () => {
  return(
    <HomeContainer>
      <BackgroundHome>
        <WelcomeCover>
          <CoverLogo>
            <img src={Logo} alt='logotipo da amostra de profissões'/>
          </CoverLogo>
        </WelcomeCover>
      </BackgroundHome>
    </HomeContainer>
  )
}

export default Home;