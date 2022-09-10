import React from "react";
import { Container, Avatar as AvatarC, Name } from './style';

export default function Avatar({name}){
  return(
    <>
      <Container>
        <AvatarC src="/assets/img/avatar.png" />
        <Name>{name}</Name>
      </Container>
    </>
  )
}