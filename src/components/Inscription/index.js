import React from "react";
import { 
  Card, 
  MessageTitle, 
  Content, 
  ContentCard, 
  Information, 
  MiniCourseName, 
  Time, 
  Place,
  WhiteStrip} from './styleInscription';

export default function InscriptionC() {

  document.title = "Mostra de profissões - Inscrisão"

  return (
    <>
      <Content>
        <Card>
          <ContentCard>
            <MessageTitle><h2>Parabéns! Você concluiu
              sua inscrição na mostra de profissões!</h2></MessageTitle>
            <Information>
              <MiniCourseName>Título teste de mini curso</MiniCourseName>
              <Time>09:00</Time>
              <Place>LAE 001</Place>
            </Information>
            <WhiteStrip />
            <Information>
              <MiniCourseName>Título teste de mini curso</MiniCourseName>
              <Time>09:00</Time>
              <Place>LAE 001</Place>
            </Information>
          </ContentCard>
        </Card>
      </Content>
    </>
  )
}