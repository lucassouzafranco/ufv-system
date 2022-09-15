import React from "react";
import { Card, Confirm, Content, ContentCard } from './styleInscription';

export default function InscriptionC() {

  document.title = "Mostra de profissões - Inscrisão"

  return (
    <>
      <Content>
        <Card>
          <ContentCard>
            <Confirm>Parabéns! Você concluiu
              sua inscrição na mostra de profissões!</Confirm>
          </ContentCard>
        </Card>
      </Content>
    </>
  )
}