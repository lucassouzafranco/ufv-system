import React from "react";
import { Container, Avatar as AvatarC, Name } from './styleAvatar';

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