import styled from "styled-components";
import ufv from '../../assets/img/ufv.jpg';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Box = styled.div`
  width: 40%;
  height: 100%;
  background-color: #682A2C;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Title = styled.div`
  h1 {
    width: 60%;
    height: 22%;
    color: white;
    margin-top: -20%;
    margin-left: 11%;
    font-size: 35pt;
    font-family: 'Pacifico', cursive;

  }
  `

export const Logo = styled.img`
  margin-top: 5%;
  width: 60%;
  height: 24%;
`

export const Main = styled.main`
  position: relative;
  z-index: 0;
  background-image: url(${ufv});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const UFVLogo = styled.img`
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 53px;
  bottom: 2%;
  left: 85%;
`