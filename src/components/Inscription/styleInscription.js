import styled from "styled-components";

export const Content = styled.main`
  height: 100vh;
  background-image: url('/assets/img/alunos.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #682A2C;
  width: 610px;
  height: 444px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContentCard = styled.div`
  text-align: center;
  padding: 1em;
`

export const Confirm = styled.span`
  color: #fff;
  font-size: 23pt;
  font-weight: 600;
`