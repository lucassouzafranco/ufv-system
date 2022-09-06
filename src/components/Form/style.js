import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-weight: 800;
  color: #682A2C;
  font-size: 40px;
  //box-shadow: 6px 6px 2px 0px #00000040 inset;
`

export const InputContainer = styled.div`
  width: 312px;
  height: 46px;
  background-color:#ECF0F1;
  border-radius: 15px;
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
  width: 20px;
  height: 20px;
`

export const Label = styled.span`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 13pt;
  margin-top: 1em;
`