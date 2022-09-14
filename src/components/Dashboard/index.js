import React, { useState, useEffect } from "react";
import {
  Menu,
  Logo,
  ItemContainer,
  Item,
  UserContainer,
  Avatar,
  Header,
  HeaderTitle,
  Content,
  Card,
  CardContainer,
  InscriptionContainer,
  InscriptionCard,
  InscriptionTitle,
  InscriptionMenu,
  InscriptionItem,
  InscriptionMenuItem,
  MiniCoursesCard,
  MiniCoursesContainer,
  MiniCoursesMenu,
  MiniCoursesMenuItem,
  MiniCoursesTitle,
  ItemsContainer,
  MiniCoursesCardTitle,
  MiniCoursesCardCount,
  CoursesCardTitle,
  CoursesCardCount,
  InscriptionCardTitle,
  InscriptionCardCount,
  ItemsContainerMini,
  MiniCoursesItem,
  Button,
  FormContainer,
  Form,
  FormTitle,
  Input,
  ButtonForm
}
  from './dashboardStyle';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { inscrisoes, mini_cursos } from '../../utils/dashboardtest';
import { UseNvigate } from "react-router-dom";

export default function DashBoardC() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [room, setRoom] = useState('');
  const [spots, setSpots] = useState('');
  const [time, setTime] = useState('');
  const [responsible, setResponsible] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    navigate('/admin/painel');
  }

  return (
    <>
      <Menu>
        <Logo src="/assets/img/logo.png" />
        <ItemContainer>
          <Link style={{ textDecoration: 'none' }} to='/admin/painel'>
            <Item
              active={pathname === "/admin/painel" ? true : false}
            >Dashboard</Item>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/admin/painel/cadastrar'>
            <Item
              active={pathname === "/admin/painel/cadastrar" ? true : false}
            >
              Cadastrar
            </Item>
          </Link>
        </ItemContainer>
        <UserContainer>
          <AiOutlineLogout style={{ fontSize: '20pt', marginRight: '0.5em', color: '#fff' }} />
          <Avatar />
        </UserContainer>
      </Menu>
      <Header>
        <HeaderTitle>{pathname === '/admin/painel' ? 'Dashboard' : 'Cadastro'}</HeaderTitle>
      </Header>
      <Content>
        {pathname === "/admin/painel" && (<>
          <CardContainer>
            <Card>
              <MiniCoursesCardTitle>Mini Cursos</MiniCoursesCardTitle>
              <MiniCoursesCardCount>0</MiniCoursesCardCount>
            </Card>
            <Card>
              <CoursesCardTitle>Cursos</CoursesCardTitle>
              <CoursesCardCount>10</CoursesCardCount>
            </Card>
            <Card>
              <InscriptionCardTitle>Inscrições</InscriptionCardTitle>
              <InscriptionCardCount>0</InscriptionCardCount>
            </Card>
          </CardContainer>
          <MiniCoursesTitle>Mini cursos</MiniCoursesTitle>
          <MiniCoursesContainer>
            <MiniCoursesCard>
              <MiniCoursesMenu>
                <MiniCoursesMenuItem>Nome</MiniCoursesMenuItem>
                <MiniCoursesMenuItem>Sala</MiniCoursesMenuItem>
                <MiniCoursesMenuItem>Vagas</MiniCoursesMenuItem>
              </MiniCoursesMenu>
              <ItemsContainerMini>
                {mini_cursos.map(item => (
                  <>
                    <MiniCoursesItem>{item.mini_curso}</MiniCoursesItem>
                    <MiniCoursesItem>{item.sala}</MiniCoursesItem>
                    <MiniCoursesItem>{item.vagas}</MiniCoursesItem>
                  </>
                ))}
              </ItemsContainerMini>
            </MiniCoursesCard>
          </MiniCoursesContainer>
          <InscriptionTitle>Inscrições</InscriptionTitle>
          <InscriptionContainer>
            <InscriptionCard>
              <InscriptionMenu>
                <InscriptionMenuItem>Nome</InscriptionMenuItem>
                <InscriptionMenuItem>Curso</InscriptionMenuItem>
                <InscriptionMenuItem>Mini curso</InscriptionMenuItem>
                <InscriptionMenuItem>Escola</InscriptionMenuItem>
                <InscriptionMenuItem>Cidade</InscriptionMenuItem>
                <InscriptionMenuItem>Data</InscriptionMenuItem>
              </InscriptionMenu>
              <ItemsContainer>
                {inscrisoes.map(item => (
                  <>
                    <InscriptionItem>{item.nome}</InscriptionItem>
                    <InscriptionItem>{item.curso}</InscriptionItem>
                    <InscriptionItem>{item.mini_curso}</InscriptionItem>
                    <InscriptionItem>{item.escola}</InscriptionItem>
                    <InscriptionItem>{item.cidade}</InscriptionItem>
                    <InscriptionItem>{item.data}</InscriptionItem>
                  </>
                ))}
              </ItemsContainer>
            </InscriptionCard>
          </InscriptionContainer>
          <Button>Gerar relatorio completo</Button>
        </>)}
        {pathname === "/admin/painel/cadastrar" && (
          <>
            <FormContainer>
              <Form onSubmit={handleSubmit}>
                <FormTitle>Cadastrar Mini Curso</FormTitle>
                <Input type='text'
                  onChange={event => setName(event.target.value)}
                  value={name}
                  placeholder="Nome/Título"
                  required
                />
                <Input type='text'
                  onChange={event => setCourse(event.target.value)}
                  value={course}
                  placeholder="Curso"
                  required
                />
                <Input type='text'
                  onChange={event => setRoom(event.target.value)}
                  value={room}
                  placeholder="Sala"
                  required
                />
                <Input
                  onChange={event => setTime(event.target.value)}
                  value={time}
                  type='time'
                  required
                />
                <Input type='number'
                  onChange={event => setSpots(event.target.value)}
                  value={spots}
                  placeholder="Vagas"
                  required
                />
                <Input
                  onChange={event => setResponsible(event.target.value)}
                  value={responsible}
                  type='text'
                  placeholder='Professor responsável'
                />
                <ButtonForm type='submit'>Cadastrar</ButtonForm>
              </Form>
            </FormContainer>
          </>
        )}
      </Content>
    </>
  )
}