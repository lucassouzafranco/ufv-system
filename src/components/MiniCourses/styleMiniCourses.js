import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: auto;
  background: url('/assets/img/pva.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 20px 0;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  background-color: #D9D9D9;
  width: 35vw;
  height: 90vh;
  margin-left: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  @media (max-width: 414px) {
    width: 45vw;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.div`
  position: relative;
  width: 100%;
  height: 15%;
  background: ${props => props.url ? `url(${props.url})` : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled.span`
  color: #fff;
  position: absolute;
  z-index: 3;
  font-weight: 800;
  font-size: 15pt;
  text-transform: uppercase;
`

export const Filter = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
`

export const Nav = styled.div`
  width: 90%;
  height: 30px;
  background-color: #682A2C;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin-top: 1em;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
`

export const Item = styled.span`
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    font-size: 20%;
  }
`

export const Form = styled.div`
  width: 90%;
  height: 450px;
  text-align: center;
  overflow-y: scroll;
`

export const BoxRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //position: absolute;
  //left: 0;
  background-color: #C7C7C7;
  height: 100%;
  width: 17%;
  
`

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //position: relative;
`

export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
`

export const Radio = styled.input`

`

export const NameCourse = styled.span`
  flex: 1;
  border-bottom: 1px solid #B0B0B0; 
  padding: 6px 0;
  font-weight: 300;
  font-size: 12pt;
  color: #111;

  @media (max-width: 414px) {
    font-size: 20%;
  }
`

export const Spots = styled.span`
  border-bottom: 1px solid #B0B0B0; 
  padding: 6px 0;
  font-weight: 300;
  font-size: 12pt;
  color: #111;

  @media (max-width: 414px) {
    font-size: 20%;
  }
`

export const Time = styled.span`
  border-bottom: 1px solid #B0B0B0; 
  padding: 6px 0;
  font-weight: 300;
  font-size: 12pt;
  color: #111;

  @media (max-width: 414px) {
    font-size: 20%;
  }
`

export const Room = styled.span`
  border-bottom: 1px solid #B0B0B0; 
  padding: 6px 0;
  font-weight: 300;
  font-size: 12pt;
  color: #111;

  @media (max-width: 414px) {
    font-size: 20%;
  }
`

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  width: 15%;
  display: block;
  height: 38px;
  background: #682A2C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  font-weight: 500;
  color: white;
  font-size: medium;
  margin: 1em auto;
  margin-bottom: 0;
`