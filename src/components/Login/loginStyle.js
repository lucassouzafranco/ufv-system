import styled from "styled-components";

export const Content = styled.main`
  height: 100vh;
  background-image: url('/assets/img/alunos.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Container = styled.div`
  text-align: center;
  padding: 1em 0;
  display: flex;
  align-items:  center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 400;

  @media (min-width: 700px) {
    font-weight: 400;
    margin-top: 28%;
  }
`

export const Form = styled.form`
  width: 269px;
  height: 250px;
  margin: 1em 0;
  background: #ECECEC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Input = styled.input`
  width: 200.67px;
  height: 33px;
  outline: none;
  border: none;
  border-radius: 3px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding-left: 0.7em;
  margin-bottom: 1em;
`

export const Button = styled.button`
  border: none;
  outline: none;
  width: 183.67px;
  height: 30px;
  background: #007DC0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
`