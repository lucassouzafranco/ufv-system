import React from 'react';
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

  return (
    <>
      <Box>
        <Container>
          {courses.map(course => (
            <Card key={course.id}>
              <Title url={course.src}>
                <Name>{course.title}</Name>
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
                  {mini_courses.map((item, index)=> (
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
          ))}
        </Container>
        <Button>Continuar</Button>
      </Box>
    </>
  )
}