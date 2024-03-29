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

export const InputCheck = styled.input`
  margin-right: 58%;
  margin-bottom: 1%;

`

export const SelectContainer = styled.select`
  border-style: none;
  padding-left: 2%;
  color: gray;
  background-color: #ECF0F1;
`

export const Icon = styled.img`
  width: 7%;
  height: 60%;
`

export const Label = styled.span`
  color: #FFFFFF;
  font-weight: 300;
  font-size: medium;
  width: 67%;
  padding: 1%;
  border-radius: 12px;
  background: #682A2C;
  padding-left: 3%;
  opacity: 0.92; 
`
export const PcdContainer = styled.div`
  margin-top: 5%;
  background: #682A2C;
  padding: 2%;
  width: 65%;
  border-radius: 8px;
  color: white;
  opacity: 0.92;
  p{
    text-align: center;
  }

  margin-bottom: 3%;
`

export const InputPCD = styled.input `
margin-left: 2%;
`

export const LabelPCD = styled.label`
  margin-left: 19%;
`

export const Error = styled.span`
  font-weight: 500;
  font-size: 12pt;
  color: #ad1515;
`

export const ButtonOutline = styled.button`
  outline: none;
  cursor: pointer;
  //border: 2px solid #682A2C;
  border: none;
  width: 29%;
  height: 38px;
  background: none;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //border-radius: 11px;
  font-weight: 600;
  color: white;
  font-size: 10pt;
  margin: 0.8em 0;
  color: #111;
`