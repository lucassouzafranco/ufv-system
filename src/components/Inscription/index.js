import React, { useEffect, useState } from "react";
import {
  Card,
  MessageTitle,
  Content,
  ContentCard,
  Information,
  MiniCourseName,
  Time,
  Place,
  WhiteStrip
} from './styleInscription';
import axios from "axios";
import { useParams } from "react-router-dom";

export default function InscriptionC() {

  document.title = "Mostra de profissões - Inscrisão";
  const [insc, setInsc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    async function getInsc() {
      if (id) {
        await axios.get(`http://200.17.76.41:3333/inscricao/get/${id}`)
          .then(response => {
            console.log(response.data);
            setInsc(response.data);
          })
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
      }
    }
    getInsc();
  }, [])

  return (
    <>
      <Content>
        <Card>
          <ContentCard>
            <MessageTitle><h2>Parabéns! Você concluiu
              sua inscrição na mostra de profissões!</h2></MessageTitle>
            {loading ?
              "Carregando... "
              :
              <>
                {insc.mini_cursos.map(item => (
                  <>
                    <Information>
                      <MiniCourseName>{item.nome_mini_curso}</MiniCourseName>
                      <Time>{item.horario}</Time>
                      <Place>{item.sala}</Place>
                    </Information>
                    <WhiteStrip />
                  </>
                ))}
              </>
            }
          </ContentCard>
        </Card>
      </Content>
    </>
  )
}