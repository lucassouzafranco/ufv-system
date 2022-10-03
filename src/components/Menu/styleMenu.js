import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 82px;
  background-color: #682A2C;
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  `
  
export const Title = styled.h1`
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 414px) {
    margin-right: 8%;
  }
`

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  width: 100px;
  height: 38px;
  background: #692123;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  font-weight: 500;
  color: white;
  font-size: medium;
`

export const NavConfirm = styled.nav`
  width: 100%;
  height: 82px;
  background-color: #682A2C;
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 150px;
  height: 70px;
`