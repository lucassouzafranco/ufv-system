import styled from "styled-components";

export const Menu = styled.div`
  width: 100%;
  height: 82px;
  background-color: #682A2C;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  height: 99%;
  width: 12.5%;
  @media screen and (max-width: 974px) {
    height: 60%;
    width: 20%;
  }
`

export const Layout = styled.div`
  min-height: 100vh;
  background: url('/assets/img/alunos.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`

export const Title = styled.h1`
  margin: 1em 0;
  color: #111;
  //background: #682A2C;
  padding: 0.5em;
  border-radius: 9px;
  font-size: 20pt;
  font-weight: 600;
`

export const CardEmail = styled.div`
  width: 50%;
  height: auto;
  background: #682A2C;
  border-radius: 18px;
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 974px) {
    width: 90%;
  }
`

export const CardStatus = styled.div`
  width: 50%;
  height: auto;
  background: #682A2C;
  border-radius: 18px;
  padding: 1em;
  margin: 1em 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 974px) {
    width: 90%;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  align-items: center;
  background-color:#ECF0F1;
  height: 32px;
  width: 80%;
  border-radius: 12px;
  border: none;
  outline: none;
  padding-left: 0.7em;
  color: #111;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder{
    color: #8C9499;
    font-weight: 400;
  }
`

export const EmailTitle = styled.span`
  margin: 0.3em 0;
  font-weight: 500;
  @media screen and (max-width: 974px) {
    font-size: 12px;
    margin: 0.5em 0;
  }
`

export const Button = styled.button`
  width: 20%;
  margin-left: 1em;
  border: none;
  outline: none;
  padding: 0.5em;
  border-radius: 10px;
  background-color: #692123;
  color: #fff;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media screen and (max-width: 974px) {
    font-size: 9px;
  }
`

export const StatusTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  font-size: 12pt;
`

export const Status = styled.span`
  color: #fff;
  font-weight: 500;
  background-color: ${props => props.inscrito ? 'green' : '#b40303'};
  padding: 0.4em;
  font-size: 10pt;
  border-radius: 5px;
  margin-left: 0.2em;
`

export const EmailStatus = styled.span`
  margin: 1em 0;
  font-weight: 400;
  font-size: 9pt;
  color: #fff;
  text-decoration: underline;
`

export const Nome = styled.span`
  margin-left: 0.2em;
  font-weight: 400;
  font-size: 10pt;
  color: #fff;
`
export const Email = styled.span`
  margin-left: 0.2em;
  font-weight: 400;
  font-size: 10pt;
  color: #fff;
`
export const Escola = styled.span`
  margin-left: 0.2em;
  font-weight: 400;
  font-size: 10pt;
  color: #fff;
  @media screen and (max-width: 974px) {
    font-size: 9pt;
  }
`
export const Data = styled.span`
  margin-left: 0.2em;
  font-weight: 400;
  font-size: 10pt;
  color: #fff;
`

export const Telefone = styled.span`
  margin-left: 0.2em;
  font-weight: 400;
  font-size: 10pt;
  color: #fff;
`

export const Erro = styled.span`
  margin: 0.6em 0;
  font-weight: 600;
  color: #111;
`

export const MiniCursoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MiniCTitle = styled.h2``


export const Information = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  padding: 0.5em;
  text-align: center;
`

export const MiniCourseName = styled.span`
  color: white;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.4em 0;
  @media screen and (max-width: 974px) {
    font-size: 9pt;
  }
`

export const Time = styled.span`
  color: white;
  font-weight: 300;
  font-size: 13px;
  margin: 0.4em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 974px) {
    font-size: 11pt;
  }
`

export const Place = styled.span`
  color: white;
  font-weight: 300;
  font-size: 13px;
  margin: 0.4em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 974px) {
    font-size: 11pt;
  }
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Credits = styled.p`
  color: #fff;
  font-size: 10pt;
  bottom: 1px;
  font-weight: 600;
  @media (max-width: 414px) {
    color: #111;
  }
`