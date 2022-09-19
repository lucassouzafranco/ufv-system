import styled from "styled-components";

export const Content = styled.main`
  height: 88vh;
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
  height: 344px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding-top: 1%;
  justify-content: center;
`

export const ContentCard = styled.div`
  text-align: center;
  padding: 1em;
`

export const MessageTitle = styled.h2`
color: #fff;
font-size: large;
font-weight: 600;
margin-bottom: 7%;
`

export const Information = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  padding: 0.5em;
`
  
export const MiniCourseName = styled.span`
  color: white;
  font-weight: 500;
  padding-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Time = styled.span`
  color: white;
  font-weight: 300;
`

export const Place = styled.span`
  color: white;
  font-weight: 300;
`

export const WhiteStrip = styled.span`
  display: flex;
  positivion: absolute;
  width: 99%;
  border-bottom: 1px solid white;
`
