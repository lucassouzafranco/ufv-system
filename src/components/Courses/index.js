import React, { useState } from 'react';
import { Main, Box, Button, Card, Title, Img, Fundo } from './styleCourses';
import { courses } from '../../utils/courses';
import { useNavigate } from 'react-router-dom';

export default function CoursesC() {

  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false
  });
  const [buttonActive, setButtonActive] = useState(true);

  function saveLocal(){
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let aux = [];
    list.forEach((item, index) => {
      if(selected[item] === true){
        courses.forEach(course => {
          if(course.id === index + 1){
            aux.push(course);
          }
        })
      }
    })
    localStorage.setItem("@COURSES_DATA", JSON.stringify(aux));
    navigate('/cursos/mini-cursos');
  }

  function chosen(id) {
    if (countSelect() < 2) {
      if (selected[id] === false) {
        setSelected({ ...selected, [id]: true });
      }
    }
    if (selected[id] === true) {
      setSelected({ ...selected, [id]: false });
      setButtonActive(true);
    }
  }

  function countSelect() {
    let i = 0;
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    list.forEach(item => {
      if (selected[item] === true) {
        i = i + 1;
      }
    })
    if (i === 1) {
      setButtonActive(false);
    }
    return i;
  }

  return (
    <>
      <Main>
        <Box>
          {courses.map(course => (
            <Card
              active={selected[course.id]}
              key={course.id}
              onClick={() => chosen(course.id)}
            >
              <Fundo />
              <Img src={course.src} />
              <Title>{course.title}</Title>
            </Card  >
          ))}
        </Box>
        <Button onClick={() => saveLocal()} disabled={buttonActive}>Continuar</Button>
      </Main>
    </>
  )
}