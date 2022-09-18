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
  Button,
  Erro
} from './styleMiniCourses';
import { mini_courses } from '../../utils/mini-courses';
import axios from 'axios';

//let disabled = [];
//let selected = [];

export default function MiniCoursesC({ courses }) {

  const [selected, setSelected] = useState([]);
  const [erro, setErro] = useState({ erro2: false, erroTime: false });
  const [curso1, setCurso1] = useState([]);
  const [curso2, setCurso2] = useState([]);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);

  /*function chosen(course) {
    console.log(selected);
    if (selected.length === 0 || selectedVerfy(course) === false) {
      selected.push(course);
      console.log("Push Course = ", selected);
    } else {
      console.log("Entrou");
      selected.splice(selected.indexOf(course));
      disabled = [];
    }
    selection();
  }

  function selectedVerfy(object) {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === object) {
        return true;
      }
    }
    return false;
  }

  function click(id) {
    const course = mini_courses.find(course => course.id === id);
    chosen(course);
    if (selected.length === 2) {
        console.log("clicou");
        console.log("Selected = ", selected);
        console.log("Disabled = ", disabled);

      for(let i = 0; i < mini_courses.length; i++){
        if((disabledVerfy(mini_courses[i]) === false) && (selectedVerfy(mini_courses[i]) === false)){
          disabled.push(mini_courses[i]);
        }
      }
    }
    setBlock(disabled);
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
    setBlock(disabled);
  }

  function disabledVerfy(object){
    for (let i = 0; i < disabled.length; i++) {
      if (disabled[i] === object) {
        return true;
      }
    }
    return false;
  }

  function setBlock(disabled) {
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

      10:00 09:30 and 10:30
      09:30 10:00 and 09:00

      10:30 com 11:00


    a = parseInt(listObj[0].slice(0, 2));
    b = parseInt(listObj[0].slice(3));
    if (b === 30) {
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':00');
      a = parseInt(a);
      a = a + 1;
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':00');
    } else {
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':30');
      a = parseInt(a);
      a = a - 1;
      if (a < 10) {
        a = '0' + String(a);
      } else {
        a = String(a);
      }
      aux.push(a + ':30');
    }

    //console.log("Aux tradeoff = ", aux);
    //console.log("List object tradeoff = ", listObj);
    for (let i = 0; i < aux.length; i++) {
      if (aux[i] === listObj[1] && aux[i] !== listObj[0]) {
        //console.log("Houve conflito");
        return true;
      }
    }
    //console.log("Não houve conflito");
    return false;
  }*/

  useEffect(() => {
    async function get() {
      const cursos = await JSON.parse(localStorage.getItem("@COURSES_DATA"))
      await axios.get(`http://200.17.76.41:3333/mini/get/${cursos[0].title}`)
        .then((response) => {
          setCurso1(response.data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading1(false));
    }

    get();
  }, [])

  useEffect(() => {
    async function get() {
      const cursos = await JSON.parse(localStorage.getItem("@COURSES_DATA"))
      await axios.get(`http://200.17.76.41:3333/mini/get/${cursos[1].title}`)
        .then((response) => {
          setCurso2(response.data);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading2(false));
    }

    get();
  }, [])


  async function handleSubmit1() {
    setErro({ erro2: false, erroTime: false });
    if (selected.length > 2 || selected.length < 2) {
      setErro({ erro2: true });
      return;
    }
    if (selected[0].time === '09:00') {
      if (selected[1].time === '10:00' || selected[1].time === '10:30' || selected[1].time === '11:00' || selected[1].time === '11:30') {
        setErro({ erroTime: true });
        return;
      }
    } else if (selected[0].time === '09:30') {
      if (selected[1].time === '10:30' || selected[1].time === '11:00' || selected[1].time === '11:30') {
        setErro({ erroTime: true });
        return;
      }
    } else if (selected[0].time === '10:00') {
      if (selected[1].time === '09:30' || selected[1].time === '09:00' || selected[1].time === '11:00' || selected[1].time === '11:30') {
        setErro({ erroTime: true });
        return;
      }
      return;
    } else if (selected[0].time === '10:30') {
      if (selected[1].time === '11:00' || selected[1].time === '11:30' || selected[1].time === '09:30' || selected[1].time === '10:00' || selected[1].time === '09:00') {
        setErro({ erroTime: true });
        return;
      }
    } else if (selected[0].time === '11:00') {
      if (selected[1].time === '09:00' || selected[1].time === '09:30' || selected[1].time === '10:00' || selected[1].time === '10:30') {
        setErro({ erroTime: true });
        return;
      }
    } else if (selected[0].time === '11:30') {
      if (selected[1].time === '09:00' || selected[1].time === '09:30' || selected[1].time === '10:00' || selected[1].time === '10:30') {
        setErro({ erroTime: true });
        return;
      }
    }
    console.log("Passou");
  }

  function disabledVerfy(object) {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === object) {
        return true;
      }
    }
    return false;
  }

  function click(id) {
    const newCurso1 = curso1.find(item => item.id === id);
    const newCurso2 = curso2.find(item => item.id === id);
    if(newCurso1){
      if (disabledVerfy(newCurso1)) {
        console.log("entrou");
        setSelected(selected.filter(item => item.id !== newCurso1.id))
      } else {
        setSelected([...selected, newCurso1]);
      }
    }else if(newCurso2){
      if (disabledVerfy(newCurso2)) {
        setSelected(selected.filter(item => item.id !== newCurso2.id))
      } else {
        setSelected([...selected, newCurso2]);
      }
    }
  }

  console.log(selected);

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
                {loading1 ? "Carregando..." :
                  <>
                    {curso1.map(curso => (
                      <>
                        <InfosContainer>
                          <RadioContainer>
                            <BoxRadio>
                              <RadioContainer>
                                <Radio
                                  onClick={() => click(curso.id)}
                                  type='checkbox' />
                              </RadioContainer>
                            </BoxRadio>
                            <NameCourse>{curso.nome}</NameCourse>
                          </RadioContainer>
                          <Spots>{curso.vagas}</Spots>
                          <Time>{curso.horario}</Time>
                          <Room>{curso.sala}</Room>
                        </InfosContainer>
                      </>
                    ))}
                  </>
                }
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
              {loading2 ? "Carregando..." :
                  <>
                    {curso2.map(curso => (
                      <>
                        <InfosContainer>
                          <RadioContainer>
                            <BoxRadio>
                              <RadioContainer>
                                <Radio 
                                  onClick={() => click(curso.id)}
                                  type='checkbox' />
                              </RadioContainer>
                            </BoxRadio>
                            <NameCourse>{curso.nome}</NameCourse>
                          </RadioContainer>
                          <Spots>{curso.vagas}</Spots>
                          <Time>{curso.horario}</Time>
                          <Room>{curso.sala}</Room>
                        </InfosContainer>
                      </>
                    ))}
                  </>
                }
              </Form>
            </CardContainer>
          </Card>
        </Container>
        {erro.erro2 && (<Erro>Selecione no minimo 2 mini cursos</Erro>)}
        {erro.erroTime && (<Erro>Horario inválido</Erro>)}
        <Button onClick={() => handleSubmit1()}>Continuar</Button>
      </Box>
    </>
  )
}