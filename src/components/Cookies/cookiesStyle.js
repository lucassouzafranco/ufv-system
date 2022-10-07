import styled from "styled-components";

export const CookiesContainer = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1000;
  bottom: 0;
`

export const CookiesContent = styled.div`
  background: #f9f9f9;
  max-width: 700px;
  padding: 1em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateY(1rem);
  animation: slideUp 1s forwards;
  @media (max-width: 500px){
    width: 350px;
  }
  @keyframes slideUp {
    to{
      transform: initial;
      opacity: initial;
    }
  }
`

export const Content = styled.span`
  font-weight: 400;
  color: #111;
  font-size: 9pt;
`

export const Button = styled.button`
  background: #007cf8;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 0.6rem 1rem;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: #0052a5;
  }
  margin-left: 1em;
`