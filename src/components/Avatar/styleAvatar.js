import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Avatar = styled.img`
  height: 50px;
  width: 50px;

  @media (max-width: 414px) {
    margin-right: 68%;
  }
`

export const Name = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 11pt;

  @media (max-width: 414px) {
    margin-right: 68%;
  }
`