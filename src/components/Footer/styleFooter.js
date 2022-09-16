import styled from "styled-components";

export const Layout = styled.img ` {
  width: 80px;
  height: 45px;
  position: absolute;
  right: 3px;
  bottom: 8px;
  
  @media (max-width: 375px) {
    width: 40px;
    height: 25px 
  }
}

`