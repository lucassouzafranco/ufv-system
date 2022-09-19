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
  ButtonForm,
  InputContainer
}
  from './dashboardStyle';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Dropdown from "../Dropdown";
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';

export default function DashBoardC() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [spots, setSpots] = useState('');
  const [time, setTime] = useState('');
  const [responsible, setResponsible] = useState('');
  const [dpSelected, setDpSelected] = useState('Escolha um curso');
  const [loading, setLoading] = useState(true);
  const [loadingC, setLoadingC] = useState(true);
  const [loadingIns, setLoadingIns] = useState(true);
  const [countMini, setCountMini] = useState(0);
  const [countInsc, setCountInsc] = useState(0);
  const [miniC, setMiniC] = useState(null);
  const [insc, setInsc] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const { react_auth_token } = parseCookies();
    const data = {
      nome: name.trim(),
      sala: room.trim(),
      curso: dpSelected,
      vagas: parseInt(spots),
      horario: time.trim()
    }

    await axios.post('http://200.17.76.41:3333/mini/create', data, {
      headers: {
        'Authorization': `Basic ${react_auth_token}`
      }
    })
      .then(response => console.log(response))
      .catch(error => console.log(error));

    //navigate('/admin/painel');
  }

  useEffect(() => {
    async function getDados() {
      if (pathname === '/admin/painel') {
        await axios.get('http://200.17.76.41:3333/mini/dados')
          .then(response => {
            const insc = response.data.inscrisoes;
            const { dados } = response.data;
            if (dados) {
              setCountInsc(insc);
              setCountMini(dados);
              return;
            }
            const { mini_cursos } = response.data;
            const { inscrisoes } = response.data;
            setCountInsc(inscrisoes);
            setCountMini(mini_cursos);
          })
          .catch(error => console.log(error))
          .finally(() => setLoading(false));
      }
    }
    getDados();
  }, [pathname]);

  useEffect(() => {
    async function getInscricoes() {
      if (pathname === '/admin/painel') {
        await axios.get('http://200.17.76.41:3333/inscricao/all')
          .then(response => {
            let aux = [];
            if (response.data.result !== 'Error') {
              response.data.forEach(item => {
                item.mini_cursos.forEach(itemM => {
                  aux.push({
                    nome: item.nome,
                    escola: item.escola,
                    cidade: item.cidade,
                    curso: itemM.curso,
                    nome_mini_curso: itemM.nome_mini_curso,
                    data: item.data,
                  })
                })
              })
              setInsc(aux);
            }
          })
          .catch(error => console.log(error))
          .finally(() => setLoadingIns(false));
      }
    }
    getInscricoes();
  }, [pathname]);


  useEffect(() => {
    async function getMini() {
      if (pathname === '/admin/painel') {
        await axios.get('http://200.17.76.41:3333/mini/all')
          .then(response => {
            setMiniC(response.data);
          })
          .catch(error => console.log(error))
          .finally(() => setLoadingC(false));
      }
    }
    getMini();
  }, []);

  async function Logout() {
    destroyCookie(null, 'react_auth_token');
    navigate('/admin');
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
          <AiOutlineLogout onClick={() => Logout()} style={{ fontSize: '20pt', marginRight: '0.5em', color: '#fff', cursor: 'pointer' }} />
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
              <MiniCoursesCardCount>
                {loading ? "Carregando" : countMini}
              </MiniCoursesCardCount>
            </Card>
            <Card>
              <CoursesCardTitle>Cursos</CoursesCardTitle>
              <CoursesCardCount>10</CoursesCardCount>
            </Card>
            <Card>
              <InscriptionCardTitle>Inscrições</InscriptionCardTitle>
              <InscriptionCardCount>
                {loading ? "Carregando" : countInsc}
              </InscriptionCardCount>
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
                {loadingC ? "Carregando..." :
                  <>
                    {miniC.map(item => (
                      <>
                        <MiniCoursesItem>{item.nome}</MiniCoursesItem>
                        <MiniCoursesItem>{item.sala}</MiniCoursesItem>
                        <MiniCoursesItem>{item.vagas}</MiniCoursesItem>
                      </>
                    ))}
                  </>
                }
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
                {loadingIns ? "Carregando" :
                  <>
                    {insc ?
                      <>
                        {insc.map(ins => (
                          <>
                            <InscriptionItem>{ins.nome}</InscriptionItem>
                            <InscriptionItem>{ins.curso}</InscriptionItem>
                            <InscriptionItem>{ins.nome_mini_curso}</InscriptionItem>
                            <InscriptionItem>{ins.escola}</InscriptionItem>
                            <InscriptionItem>{ins.cidade}</InscriptionItem>
                            <InscriptionItem>{ins.data}</InscriptionItem>
                          </>
                        ))}
                      </>
                      :
                      <>
                        <InscriptionItem>AINDA NÃO POSSUE INSCRIÇÕES</InscriptionItem>
                      </>
                    }
                  </>
                }
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
                <InputContainer>
                  <Dropdown variant='dashboard' selected={dpSelected} setSelected={setDpSelected} />
                </InputContainer>
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