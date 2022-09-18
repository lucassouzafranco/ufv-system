import styled from "styled-components";

export const Menu = styled.nav`
  height: 70px;
  background-color: #682A2C;
  padding: 0.7em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 150px;
  height: 50px;

  @media (max-width: 414px) {
    display: none;
  }
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
`

export const Item = styled.li`
  list-style: none;
  margin: 0 1em;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background-color: ${props => props.active ?  '#973d409d': 'none' };
  padding: 0.4em;
  border-radius: 10px;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1em;
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #fff;
`

export const Header = styled.div`
  height: 15vh;
  border-bottom: 2px solid #d9d9d9;
  display: flex;
  align-items: center;

  @media (max-width: 414px) {
    display: none;
  }
`

export const HeaderTitle = styled.h1`
  font-weight: 700;
  padding-left: 1em;
  font-size: 20pt;
`
export const Content = styled.main`
  background-color: #F3F4F6;
  padding: 1em 0;
`
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  width: 200px;
  height: 150px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MiniCoursesCardTitle = styled.h2`
  font-size: 12pt;
  font-weight: 500;
  font-size: 17pt;
  text-align: center;
  
  @media (max-width: 414px) {
    font-size: 15pt;
  }

  @media (max-width: 414px) {
    font-size: 13pt;
    padding: 0 3%;
  }
`

export const MiniCoursesCardCount = styled.span`
  font-weight: 400;
  font-size: 15pt;
  margin-top: 0.4em;
`
export const CoursesCardTitle = styled.h2`
  font-size: 12pt;
  font-weight: 500;
  font-size: 17pt;
  
  @media (max-width: 414px) {
    font-size: 15pt;
  }
`

export const CoursesCardCount = styled.span`
  font-weight: 400;
  font-size: 15pt;
  margin-top: 0.4em;
`

export const InscriptionCardTitle = styled.h2`
  font-size: 12pt;
  font-weight: 500;
  font-size: 17pt;

  @media (max-width: 414px) {
    font-size: 13pt;
  }
`

export const InscriptionCardCount = styled.span`
  font-weight: 400;
  font-size: 15pt;
  margin-top: 0.4em;
`

export const  InscriptionTitle = styled.h1`
  font-weight: 500;
  font-size: 17pt;
  margin-left: 15%;
  margin-top: 2em;
`

export const InscriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.4em;
`

export const InscriptionCard = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow-y: scroll;
`

export const ItemsContainer = styled.div`
  display: grid;  
  grid-template-columns: repeat(6, calc(100% / 6));
  flex: 1;
`

export const ItemsContainerMini = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  flex: 1;
`

export const InscriptionMenu = styled.div`
  height: 30px;
  background-color: #682A2C;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: grid;
  grid-template-columns: repeat(6, calc(100% / 6));
`

export const InscriptionItem = styled.span`
  font-size: 10pt;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 0.7em;

  @media (max-width: 414px) {
    font-size: 5pt;
  }
`

export const MiniCoursesItem = styled.span`
  font-size: 10pt;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 0.7em;
`

export const InscriptionMenuItem = styled.span`
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10pt;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 7pt;
  }
`

export const  MiniCoursesTitle = styled.h1`
  font-weight: 500;
  font-size: 17pt;
  margin-left: 15%;
  margin-top: 2em;
`

export const MiniCoursesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.4em;
`

export const MiniCoursesCard = styled.div`
  width: 70vw;
  height: 50vh;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  overflow-y: scroll;
`

export const MiniCoursesMenu = styled.div`
  height: 30px;
  background-color: #682A2C;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, auto);
`

export const MiniCoursesMenuItem = styled.span`
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10pt;
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
  font-size: small;
  margin: 1em auto;

  @media (max-width: 414px) {
    width: 35%;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 50%;
  height: 60vh;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 414px) {
    margin-top: 20%;
    width: 70%;
    height: 50vh;
  }
`

export const FormTitle = styled.h1`
  font-size: 15pt;
  text-align: center;
  margin: 1em;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Input = styled.input`
  background-color: #ECF0F1;
  width: 40%;
  height: 35px;
  border-radius: 12px;
  border: none;
  outline: none;
  margin: 0.5em 0;
  color: #111;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder{
    color: #8C9499;
    font-weight: 400;
  }
  padding-left: 1em;

  @media (max-width: 414px) {
    width: 70%;
  }
`

export const ButtonForm = styled.button`
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
  font-size: small;
  margin: 1em auto;

  @media (max-width: 414px) {
    width: 40%;
  }
`

export const InputContainer = styled.div`
  background-color: #ECF0F1;
  width: 40%;
  height: 35px;
  border-radius: 12px;
  margin: 0.5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`