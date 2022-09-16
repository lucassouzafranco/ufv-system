import styled from "styled-components";
import ufv from '../../assets/img/ufv.jpg';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media(max-width: 767px) {
    flex-direction: column;
  }
`

export const Box = styled.div`
  width: 30%;
  height: 100%;
  background-color: #682A2C;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media(max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: 10%;
    background-color: #3A92CE;
  }
`

export const Title = styled.div`
  h1 {
    width: 60%;
    height: 22%;
    color: white;
    margin-top: -12%;
    margin-left: 21%;
    font-family: 'Pacifico', cursive;
    font-size: 28pt;
  }

  @media(max-width: 767px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: auto;
  min-width: 180px;
  height: 78px;

  @media(max-width: 767px) {
    width: 100px;
    margin-top: 2%;
  }

  @media(max-width: 375px) {
    width: 50px;
    height: 60px;
    margin-top: 2%;
  }
`

export const Subtitle = styled.h3`
  margin-top: 2%;
  margin-left: 7%;
  color: white;
  font-style: italic;
  font-weight: 200;
  font-size: 10pt;
`

export const Main = styled.main`
  position: relative;
  z-index: 0;
  background-image: url(${ufv});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media(max-width: 767px) {
    width: 100%;
  }
`
