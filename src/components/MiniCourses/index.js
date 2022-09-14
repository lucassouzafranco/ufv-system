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

export default function MiniCoursesC({ courses }) {

  const [selected, setSelected] = useState({});
  let list = [];

  function chosen(id){
    const course = mini_courses.find(course => course.id === id);
    if(list.indexOf(course) !== -1){
      list.splice(list.indexOf(course));
      //console.log("removeu");
    }else{
      list.push(course);
      //console.log("adicionou");
    }
    console.log(list);
  }

  function click(id){
    chosen(id);
    if(list.length === 1){
      if(list[0].time !== ''){

      }
    }
  }

  function tradeOff(obj1, obj2){
    let listObj = [obj1.time, obj2.time];
    for(let i = 0; i < 2; i++){
      if(listObj[i].slice(3) === '00'){
        break;
      }
    }
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
                          <Radio disabled={selected[item.id]} onClick={() => click(item.id)} type='checkbox' />
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