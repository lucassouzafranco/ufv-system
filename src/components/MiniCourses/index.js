import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  Title,
  Filter,
  Name,
  Nav,
  Item,
  Form,
  Radio,
  NameCourse,
  Room,
  Spots,
  Time,
  RadioContainer,
  InfosContainer,
  CardContainer,
  BoxRadio,
  Box,
  Button
} from './styleMiniCourses';
import { mini_courses } from '../../utils/mini-courses';

let disabled = [];
let selected = [];

export default function MiniCoursesC({ courses }) {

  const [blocked, setBlocked] = useState({});

  function chosen(course) {
    console.log(selected);
    if (selected.length === 0) {
      selected.push(course);
      console.log("Push Course = ", selected);
    } else {
      console.log("Entrou");
      selected.splice(selected.indexOf(course));
      disabled = [];
    }
    selection();
  }

  function click(id) {
    const course = mini_courses.find(course => course.id === id);
    chosen(course);
    console.log("clicou");
    console.log("Selected = ", selected);
    console.log("Disabled = ", disabled);
  }

  console.log("Blocked = ", blocked);

  function selection() {
    let i;
    let j;
    //let disabled = [];
    for (i = 0; i < mini_courses.length; i++) {
      for (j = 0; j < selected.length; j++) {
        if ((tradeOff(mini_courses[i], selected[j])) && (mini_courses[i] !== selected[j])) {
          disabled.push(mini_courses[i]);
        }
      }
    }
    disabledVerify(disabled);
  }

  function disabledVerify(disabled) {
    let aux = {};
    for (let i = 1; i <= mini_courses.length; i++) {
      aux[i] = false;
    }
    disabled.forEach(item => {
      aux[item.id] = true;
    })
    setBlocked(aux);
  }

  function tradeOff(obj1, obj2) {
    let listObj = [obj1.time, obj2.time];
    let aux = [];
    let a = 0, b = '';
    //console.log("Não ordenado = ",listObj);
    listObj.sort((a, b) => {
      if (a < b) {
        return -1;
      } else {
        return true;
      }
    });
    //console.log("Ordenado = ",listObj);
    /* 
      10:00 09:30 and 10:30
      09:30 10:00 and 09:00

      10:30 com 11:00
    */

    a = parseInt(listObj[0].slice(0, 2));
    b = parseInt(listObj[0].slice(3));
    if (b === 30) {
      aux.push(String(a) + ':00');
      a = a + 1;
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':00');
    } else {
      aux.push(String(a) + ':30');
      a = a - 1;
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':30');
    }

    console.log("Aux tradeoff = ", aux);
    console.log("List object tradeoff = ", listObj);
    for (let i = 0; i < aux.length; i++) {
      if (aux[i] === listObj[1] && aux[i] !== listObj[0]) {
        console.log("Houve conflito");
        return true;
      }
    }
    console.log("Não houve conflito");
    return false;
  }

  return (
    <>
      <Box>
        <Container>
          <Card>
            <Title url={courses[0].src}>
              <Name>{courses[0].title}</Name>
              <Filter />
            </Title>
            <CardContainer>
              <Nav>
                <Item>Tema</Item>
                <Item>Vagas</Item>
                <Item>Horário</Item>
                <Item>Sala</Item>
              </Nav>
              <Form>
                {mini_courses.map((item, index) => (
                  <>
                    <InfosContainer key={index}>
                      <RadioContainer>
                        <BoxRadio>
                          <Radio
                            disabled={blocked[item.id]}
                            onClick={() => click(item.id)}
                            type='checkbox'
                          />
                        </BoxRadio>
                        <NameCourse>{item.name}</NameCourse>
                      </RadioContainer>
                      <Spots>{item.spots}</Spots>
                      <Time>{item.time}</Time>
                      <Room>{item.sala}</Room>
                    </InfosContainer>
                  </>
                ))}
              </Form>
            </CardContainer>
          </Card>
          <Card>
            <Title url={courses[1].src}>
              <Name>{courses[1].title}</Name>
              <Filter />
            </Title>
            <CardContainer>
              <Nav>
                <Item>Tema</Item>
                <Item>Vagas</Item>
                <Item>Horário</Item>
                <Item>Sala</Item>
              </Nav>
              <Form>
                {mini_courses.map((item, index) => (
                  <>
                    <InfosContainer key={index}>
                      <RadioContainer>
                        <BoxRadio>
                          <Radio type='radio' />
                        </BoxRadio>
                        <NameCourse>{item.name}</NameCourse>
                      </RadioContainer>
                      <Spots>{item.spots}</Spots>
                      <Time>{item.time}</Time>
                      <Room>{item.sala}</Room>
                    </InfosContainer>
                  </>
                ))}
              </Form>
            </CardContainer>
          </Card>
        </Container>
        <Button>Continuar</Button>
      </Box>
    </>
  )
}