import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 700;
  color: #682A2C;
  font-size: 28pt;
  //box-shadow: 6px 6px 2px 0px #00000040 inset;
`

export const InputContainer = styled.div`
  width: 65%;
  height: 44px;
  background-color:#ECF0F1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin: 0.4em 0;
`

export const Input = styled.input`
  background: none;
  width: 80%;
  border: none;
  outline: none;
  margin-left: 0.7em;
  color: #111;
  font-weight: 400;
  ::placeholder,
  ::-webkit-input-placeholder{
    color: #8C9499;
    font-weight: 400;
  }
`

export const Icon = styled.img`
  width: 7%;
  height: 60%;
`

export const Label = styled.span`
  color: #FFFFFF;
  font-weight: 300;
  font-size: medium;
  margin-top: 7%;
  width: 67%;
  padding: 1%;
  border-radius: 12px;
  background: #682A2C;
  padding-left: 3%;
  opacity: 0.92; 
`