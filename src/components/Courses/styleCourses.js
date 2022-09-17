import styled from "styled-components";
import Aluno1 from '../../assets/img/alunos-1.png';  

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background: url(${Aluno1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (max-width: 414px) {
    background: none;
    height: 92vh;
    flex-direction: column;
  }
`

export const Box = styled.div`
  width: 88%;
  height: auto;
  background-color: #EFEFEF;
  border-radius: 15px;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  @media (min-width: 360px) {
    padding: 0.2em;
    height: auto;
    width: 69%;
    opacity: 0.93;
  }

  @media (min-width: 768px) {
    padding: 0.2em;
    height: auto;
    width: 87%;
    opacity: 0.93;
  }

  @media (min-width: 820px) {
    padding: 0.2em;s
    height: auto;
    width: 82%;
    opacity: 0.93;
  }

  @media (min-width: 900px) {
    padding: 0.2em;s
    height: auto;
    width: 50%;
    opacity: 0.93;
  }
`

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 2em 0;
  padding: 0.3em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 205px;
  background-color: #682A2C;
  font-size: 13pt;
  color: #fff;
  font-weight: 600;
  &:disabled{
    background-color: #d9d9d9;
    cursor: default;
  }
`

export const Fundo = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  width: inherit;
  height: inherit;
  position: absolute;
  z-index: 2;

  @media (max-width: 414px) {
    
  }
`

export const Card = styled.div`
  width: 164px;
  height: 151px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 1em;
  cursor: pointer;
  border: 93px solid ${props => props.active ? '#682A2C' : 'none'};
  border-radius: 10px;
  transition: 0.2s;
  box-shadow: 0 0 0 4px #682A2C;

  @media (max-width: 414px) {
    height: 80px;
    width: 100px;
    border: 52px solid ${props => props.active ? '#682A2C' : 'none'};
    margin: 0.5em;
    box-shadow: 0 0 0 0px #682A2C;
  }

  @media (min-width: 768px) {
    height: 80px;
    width: 100px;
    border: 50px solid ${props => props.active ? '#682A2C' : 'none'};
  }
`

export const Img = styled.img`
  width: inherit;
  height: inherit;
  border-radius: 15px;
  z-index: 1;
  position: absolute;

  @media (max-width: 414px) {
    
  }
`

export const Title = styled.h1`
  color: #fff;
  font-weight: 800;
  font-size: 13pt;
  z-index: 2;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  @media (max-width: 414px) {
    font-size: 9pt;
  }

  @media (min-width: 768px) {
    font-size: 9pt;
  }

`