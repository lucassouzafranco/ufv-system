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
  InputContainer,
  ContainerTitle,
  Search
}
  from './dashboardStyle';
import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Dropdown from "../Dropdown";
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { parseCookies, destroyCookie } from 'nookies';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


export default function DashBoardC() {

  let aux = [];

  async function relatorio(data) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    await axios.get('https://api.mostra.crp.ufv.br/mini/all')
      .then(response => {
        response.data.forEach((item, index) => {
          if (!aux.some(auxItem => item.nome === auxItem.nome)) {
            aux.push({
              id: item.id,
              nome: item.nome
            })
          }
        })
        aux.sort((a, b) => {
          if (a.nome < b.nome) {
            return -1;
          } else {
            return true;
          }
        });
        console.log(aux);
      })
      .catch(error => console.log(error));

    const reportTitle = [];

    /* Análise Sensorial */
    const curso1 = data.filter(item => item.nome_mini_curso === 'Análise Sensorial')

    /* As plantas também ficam doentes! */
    const curso2 = data.filter(item => item.nome_mini_curso === 'As plantas também ficam doentes!');

    /* Como o nutricionista cuida da saúde das pessoas e de populações? */
    const curso3 = data.filter(item => item.nome_mini_curso === 'Como o nutricionista cuida da saúde das pessoas e de populações?');

    /* Conhecendo os insetos */
    const curso4 = data.filter(item => item.nome_mini_curso === 'Conhecendo os insetos');

    /* Conhecendo outras formas de alimentação */
    const curso5 = data.filter(item => item.nome_mini_curso === 'Conhecendo outras formas de alimentação');

    /* Desenvolvimento de Produtos e Impressão 3D */
    const curso6 = data.filter(item => item.nome_mini_curso === 'Desenvolvimento de Produtos e Impressão 3D');

    /* Desenvolvimento de embalagens ativas */
    const curso7 = data.filter(item => item.nome_mini_curso === 'Desenvolvimento de embalagens ativas');

    /* Do DNA ao Cromossomo */
    const curso8 = data.filter(item => item.nome_mini_curso === 'Do DNA ao Cromossomo');

    /* Evolução Humana */
    const curso9 = data.filter(item => item.nome_mini_curso === 'Evolução Humana');

    /* Experiências de Química */
    const curso10 = data.filter(item => item.nome_mini_curso === 'Experiências de Química');

    /* Exposição dos tratores e máquinas */
    const curso11 = data.filter(item => item.nome_mini_curso === 'Exposição dos tratores e máquinas');

    /* Introdução à programação */
    const curso12 = data.filter(item => item.nome_mini_curso === 'Introdução à programação');

    /* Laboratório de Geotecnia e Asfalto */
    const curso13 = data.filter(item => item.nome_mini_curso === 'Laboratório de Geotecnia e Asfalto');

    /* Laboratório de Hidráulica */
    const curso14 = data.filter(item => item.nome_mini_curso === 'Laboratório de Hidráulica');

    /* Laboratório de Materiais de Construção Civil */
    const curso15 = data.filter(item => item.nome_mini_curso === 'Laboratório de Materiais de Construção Civil');

    /* Laboratório de Modelagem em 3D */
    const curso16 = data.filter(item => item.nome_mini_curso === 'Laboratório de Modelagem em 3D');

    /* Nutrição na prática clínica e esportiva */
    const curso17 = data.filter(item => item.nome_mini_curso === 'Nutrição na prática clínica e esportiva');

    /* O mundo secreto das plantas  */
    const curso18 = data.filter(item => item.nome_mini_curso === 'O mundo secreto das plantas');

    /* Observação dos microrganismos do ambiente */
    const curso19 = data.filter(item => item.nome_mini_curso === 'Observação dos microrganismos do ambiente');

    /* Oficina de Simulação Computacional e Inteligência Artificial */
    const curso20 = data.filter(item => item.nome_mini_curso === 'Oficina de Simulação Computacional e Inteligência Artificial');

    /* Os diversos campos de atuação do contador */
    const curso21 = data.filter(item => item.nome_mini_curso === 'Os diversos campos de atuação do contador');

    /* Quanta vida cabe em uma gota d'água? */
    const curso22 = data.filter(item => item.nome_mini_curso === `Quanta vida cabe em uma gota d'água?`);

    /* Rótulo dos alimentos: o que ele tem as nos contar? */
    const curso23 = data.filter(item => item.nome_mini_curso === 'Rótulo dos alimentos: o que ele tem as nos contar?');

    /* Visita ao laboratório de Anatomia Humana */
    const curso24 = data.filter(item => item.nome_mini_curso === 'Visita ao laboratório de Anatomia Humana');

    const dados1 = curso1.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados2 = curso2.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 9, margin: [0, 2, 0, 2] }
      ]
    });

    const dados3 = curso3.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados4 = curso4.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados5 = curso5.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados6 = curso6.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados7 = curso7.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados8 = curso8.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados9 = curso9.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados10 = curso10.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados11 = curso11.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados12 = curso12.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados13 = curso13.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados14 = curso14.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados15 = curso15.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados16 = curso16.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados17 = curso17.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados18 = curso18.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados19 = curso19.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados20 = curso20.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados21 = curso21.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados22 = curso22.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados23 = curso23.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const dados24 = curso24.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2] }
      ]
    });

    const detalhes1 = [
      { text: `Análise Sensorial`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados1
          ]
        }
      }
    ];

    const detalhes2 = [
      { text: `As plantas também ficam doentes!`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados2
          ]
        }
      }
    ];

    const detalhes3 = [
      { text: `Como o nutricionista cuida da saúde das pessoas e de populações?!`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados3
          ]
        }
      }
    ];

    const detalhes4 = [
      { text: `Conhecendo os insetos`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados4
          ]
        }
      }
    ];

    const detalhes5 = [
      { text: `Conhecendo outras formas de alimentação`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados5
          ]
        }
      }
    ];

    const detalhes6 = [
      { text: `Desenvolvimento de Produtos e Impressão 3D`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados6
          ]
        }
      }
    ];

    const detalhes7 = [
      { text: `Desenvolvimento de embalagens ativas`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados7
          ]
        }
      }
    ];

    const detalhes8 = [
      { text: `Do DNA ao Cromossomo`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados8
          ]
        }
      }
    ];

    const detalhes9 = [
      { text: `Evolução Humana`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados9
          ]
        }
      }
    ];

    const detalhes10 = [
      { text: `Experiências de Química`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados10
          ]
        }
      }
    ];

    const detalhes11 = [
      { text: `Exposição dos tratores e máquinas`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados11
          ]
        }
      }
    ];

    const detalhes12 = [
      { text: `Introdução à programação`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados12
          ]
        }
      }
    ];

    const detalhes13 = [
      { text: `Laboratório de Geotecnia e Asfalto`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados13
          ]
        }
      }
    ];

    const detalhes14 = [
      { text: `Laboratório de Hidráulica`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados14
          ]
        }
      }
    ];

    const detalhes15 = [
      { text: `Laboratório de Materiais de Construção Civil`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados15
          ]
        }
      }
    ];

    const detalhes16 = [
      { text: `Laboratório de Modelagem em 3D`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados16
          ]
        }
      }
    ];

    const detalhes17 = [
      { text: `Nutrição na prática clínica e esportiva`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados17
          ]
        }
      }
    ];

    const detalhes18 = [
      { text: `O mundo secreto das plantas`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados18
          ]
        }
      }
    ];

    const detalhes19 = [
      { text: `Observação dos microrganismos do ambiente`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados19
          ]
        }
      }
    ];

    const detalhes20 = [
      { text: `Oficina de Simulação Computacional e Inteligência Artificial`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados20
          ]
        }
      }
    ];

    const detalhes21 = [
      { text: `Os diversos campos de atuação do contador`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados21
          ]
        }
      }
    ];

    const detalhes22 = [
      { text: `Quanta vida cabe em uma gota d'água?`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados22
          ]
        }
      }
    ];

    const detalhes23 = [
      { text: `Rótulo dos alimentos: o que ele tem as nos contar?`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados23
          ]
        }
      }
    ];

    const detalhes24 = [
      { text: `Visita ao laboratório de Anatomia Humana`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Email', style: 'tableHeader', fontSize: 11 },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11 },
              { text: 'Escola', style: 'tableHeader', fontSize: 11 },
              { text: 'PCD', style: 'tableHeader', fontSize: 11 },
              { text: 'Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Data', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 }
            ],
            ...dados24
          ]
        }
      },
      { text: `Relatório gerado em ${new Date()}`, style: 'footer' },
    ];

    const footer = [];

    const doc = {
      pageSize: 'A0',
      pageMargins: [15, 50, 14, 40],
      header: [reportTitle],
      content: [
        detalhes1,
        detalhes2,
        detalhes3,
        detalhes4,
        detalhes5,
        detalhes6,
        detalhes7,
        detalhes8,
        detalhes9,
        detalhes10,
        detalhes11,
        detalhes12,
        detalhes13,
        detalhes14,
        detalhes15,
        detalhes16,
        detalhes17,
        detalhes18,
        detalhes19,
        detalhes20,
        detalhes21,
        detalhes22,
        detalhes23,
        detalhes24
      ],
      footer: [footer],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [15, 20, 0, 10]
        },
        footer: {
          fontSize: 10,
          bold: true,
          margin: [15, 20, 0, 10]
        }
      }
    }
    pdfMake.createPdf(doc).download('Relatorio Completo');
  }

  async function RelatorioProfessor() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let aux = [];
    let rooms = [];
    let rooms_count = [];
    await axios.get('https://api.mostra.crp.ufv.br/mini/full')
      .then(response => {
        response.data.forEach(item => {
          rooms.push({
            sala: item.sala,
            horario: item.horario,
            nome: item.nome
          })
        })
      })
    //console.log(rooms);

    await axios.get('https://api.mostra.crp.ufv.br/inscricao/all')
      .then(response => {
        response.data.map(item => {
          item.mini_cursos.map(itemM => {
            aux.push({
              nome_mini_curso: itemM.nome_mini_curso,
              sala: itemM.sala,
              horario: itemM.horario
            });
          });
        });
        //console.log(aux);
      })
      .catch(error => console.log(error));

    rooms.forEach(room => {
      rooms_count.push({
        sala: room.sala,
        count: aux.filter(a => a.sala === room.sala && a.horario === room.horario && a.nome_mini_curso === room.nome).length,
        horario: room.horario,
        nome_mini_curso: room.nome
      })
    })
    rooms_count = rooms_count.sort((a, b) => {
      if (a.nome_mini_curso < b.nome_mini_curso) {
        return -1;
      } else {
        return true;
      }
    })

    const dados = rooms_count.map(item => {
      return [
        { text: item.count, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });
    const detalhes = [
      { text: `Relatorio Geral - Professor`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Quantidade', style: 'tableHeader', fontSize: 11 },
              { text: 'Nome', style: 'tableHeader', fontSize: 11 },
              { text: 'Horario', style: 'tableHeader', fontSize: 11 },
              { text: 'Sala', style: 'tableHeader', fontSize: 11 },
            ],
            ...dados
          ]
        }
      },
      { text: `Relatório gerado em ${new Date()}`, style: 'footer' },
    ];

    const footer = [];
    const title = [];

    let docDefination = {
      pageSize: 'A4',
      pageMargins: [15, 50, 14, 40],
      content: [detalhes],
      header: [title],
      footer: [footer],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [15, 20, 0, 10]
        },
        footer: {
          fontSize: 10,
          bold: true,
          margin: [15, 20, 0, 10]
        }
      }
    }
    pdfMake.createPdf(docDefination).download('Relatorio-Professor');
  }

  async function RelatorioPorHorario() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let minis = [];
    await axios.get('https://api.mostra.crp.ufv.br/inscricao/all')
      .then(response => {
        response.data.forEach(item => {
          item.mini_cursos.forEach(mini => {
            minis.push({
              nome: item.nome,
              sala: mini.sala,
              horario: mini.horario,
            })
          })
        })
      })
      .catch(error => console.log(error));

    const Nove = minis.filter(item => item.horario === '09:00').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });
    const NoveEMeia = minis.filter(item => item.horario === '09:30').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });;
    const Dez = minis.filter(item => item.horario === '10:00').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });;
    const DezEMeia = minis.filter(item => item.horario === '10:30').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });;
    const Onze = minis.filter(item => item.horario === '11:00').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });;
    const OnzeEMeia = minis.filter(item => item.horario === '11:30').sort((a, b) => {
      if (a.nome < b.nome) {
        return -1
      } else {
        return true;
      }
    });;

    const dadosNove = Nove.map((item, index) => {
      return [
        { text: `${index + 1}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const dadosNoveEMeia = NoveEMeia.map((item, index) => {
      return [
        { text: `${(Nove.length) + (index + 1)}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const dadosDez = Dez.map((item, index) => {
      return [
        { text: `${(NoveEMeia.length) + (Nove.length) + (index + 1)}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const dadosDezEMeia = DezEMeia.map((item, index) => {
      return [
        { text: `${(Dez.length) + (NoveEMeia.length) + (Nove.length)+ (index + 1)}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const dadosOnze = Onze.map((item, index) => {
      return [
        { text: `${(DezEMeia.length) + (Dez.length) + (NoveEMeia.length) + (Nove.length)  + (index + 1)}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const dadosOnzeEMeia = OnzeEMeia.map((item, index) => {
      return [
        { text: `${(Onze.length) + (Dez.length) + (DezEMeia.length) + (NoveEMeia.length) + (Nove.length) + (index + 1)}`, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const detalhesNove = [
      { text: `Relatorio Geral - 09:00`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosNove
          ]
        }
      },
    ];

    const detalhesNoveEMeia = [
      { text: `Relatorio Geral - 09:30`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosNoveEMeia
          ]
        }
      },
    ];

    const detalhesDez = [
      { text: `Relatorio Geral - 10:00`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosDez
          ]
        }
      },
    ];

    const detalhesDezEMeia = [
      { text: `Relatorio Geral - 10:30`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosDezEMeia
          ]
        }
      },
    ];

    const detalhesOnze = [
      { text: `Relatorio Geral - 11:00`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosOnze
          ]
        }
      },
    ];

    const detalhesOnzeEMeia = [
      { text: `Relatorio Geral - 11:30`, style: 'header' },

      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*'],
          body: [
            [
              { text: 'Numero', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
            ],
            ...dadosOnzeEMeia
          ]
        }
      },
      { text: `Relatório gerado em ${new Date()}`, style: 'footer' },
    ];

    const footer = [];
    const title = [];

    let docDefination = {
      pageSize: 'A3',
      pageMargins: [15, 50, 14, 40],
      content: [detalhesNove, detalhesNoveEMeia, detalhesDez, detalhesDezEMeia, detalhesOnze, detalhesOnzeEMeia],
      header: [title],
      footer: [footer],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [15, 20, 0, 10]
        },
        footer: {
          fontSize: 10,
          bold: true,
          margin: [15, 20, 0, 10]
        }
      }
    }
    pdfMake.createPdf(docDefination).download('Relatorio-Horario');
  }

  async function RelatorioGeral() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    let all = [];
    await axios.get('https://api.mostra.crp.ufv.br/inscricao/all')
      .then(response => {
        if (response.data.result !== 'Error') {
          response.data.forEach(item => {
            item.mini_cursos.forEach(itemM => {
              all.push({
                nome: item.nome,
                escola: item.escola,
                cidade: item.cidade,
                email: item.email,
                telefone: item.telefone,
                horario: itemM.horario,
                PCD: item.PCD,
                curso: itemM.curso,
                sala: itemM.sala,
                nome_mini_curso: itemM.nome_mini_curso,
                data: item.data,
              })
            })
          })
        }
      })
      .catch(error => console.log(error));

    const dados = all.map(item => {
      return [
        { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.cidade, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.email, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.telefone, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.escola, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.PCD, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.nome_mini_curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.data, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
        { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
      ]
    });

    const detalhes = [
      { text: `Relatorio Geral`, style: 'header' },
      {
        table: {
          headerRows: 1,
          widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
          body: [
            [
              { text: 'Nome', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Cidade', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Email', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Telefone', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Escola', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'PCD', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Curso', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Mini Curso', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Horario', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Data', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true },
              { text: 'Sala', style: 'tableHeader', fontSize: 11, alignment: 'center', bold: true }
            ],
            ...dados
          ]
        }
      },
      { text: `Relatório gerado em ${new Date()}`, style: 'footer' },
    ];

    const footer = [];
    const title = [];

    let docDefination = {
      pageSize: 'A0',
      pageMargins: [15, 50, 14, 40],
      content: [detalhes],
      header: [title],
      footer: [footer],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [15, 20, 0, 10]
        },
        footer: {
          fontSize: 10,
          bold: true,
          margin: [15, 20, 0, 10]
        }
      }
    }
    pdfMake.createPdf(docDefination).download('Relatorio-Geral');
  }

  async function RelatorioVagasRestantes() {
    let mini = [];
    await axios.get('https://api.mostra.crp.ufv.br/mini/full')
      .then(response => {
        response.data.forEach(item => {
          if (item.vagas > 0) {
            mini.push(item);
          }
        })
        mini = mini.sort((a, b) => {
          if (a.horario < b.horario) {
            return -1;
          } else {
            return true;
          }
        });
        const dados = mini.map(item => {
          return [
            { text: item.nome, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
            { text: item.sala, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
            { text: item.curso, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
            { text: item.vagas, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
            { text: item.horario, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' },
            { text: item.professor, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment: 'center' }
          ]
        });
        const detalhes = [
          { text: `Relatorio Geral - Vagas Restantes`, style: 'header' },

          {
            table: {
              headerRows: 1,
              widths: ['*', '*', '*', '*', '*', '*'],
              body: [
                [
                  { text: 'Nome', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
                  { text: 'Sala', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
                  { text: 'Curso', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
                  { text: 'Vagas', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
                  { text: 'Horario', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true },
                  { text: 'Professor', style: 'tableHeader', fontSize: 12, alignment: 'center', bold: true }
                ],
                ...dados
              ]
            }
          },
          { text: `Relatório gerado em ${new Date()}`, style: 'footer' },
        ];
        const footer = [];
        const title = [];

        let docDefination = {
          pageSize: 'A4',
          pageMargins: [15, 50, 14, 40],
          content: [detalhes],
          header: [title],
          footer: [footer],
          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [15, 20, 0, 10]
            },
            footer: {
              fontSize: 10,
              bold: true,
              margin: [15, 20, 0, 10]
            }
          }
        }
        pdfMake.createPdf(docDefination).download('Relatorio-Vagas-Restantes');
      })
      .catch(error => console.log(error));
  }

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
  const [filter, setFilter] = useState(null);

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

    await axios.post('https://api.mostra.crp.ufv.br/mini/create', data, {
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
        await axios.get('https://api.mostra.crp.ufv.br/mini/dados')
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

  /* Orderna a lista de inscrições da ultima inscrição até a primeira.
  function orderData(list){
    list.sort((a,b) => {
      if(a.data > b.data){
        return true;
      }else{
        return true;
      }
    })
    return list;
  }*/

  function filterName(event) {
    if (filter) {
      setFilter(null);
    }

    setFilter(insc.filter(item => item.nome.includes(event.target.value)));
  }


  useEffect(() => {
    async function getInscricoes() {
      if (pathname === '/admin/painel') {
        await axios.get('https://api.mostra.crp.ufv.br/inscricao/all')
          .then(response => {
            let aux = [];
            if (response.data.result !== 'Error') {
              response.data.forEach(item => {
                item.mini_cursos.forEach(itemM => {
                  aux.push({
                    nome: item.nome,
                    escola: item.escola,
                    cidade: item.cidade,
                    email: item.email,
                    telefone: item.telefone,
                    horario: itemM.horario,
                    PCD: item.PCD,
                    curso: itemM.curso,
                    sala: itemM.sala,
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
        await axios.get('https://api.mostra.crp.ufv.br/mini/all')
          .then(response => {
            setMiniC(response.data);
          })
          .catch(error => console.log(error))
          .finally(() => setLoadingC(false));
      }
    }
    getMini();
  }, [pathname]);

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
          {
            /*
              <Link style={{ textDecoration: 'none' }} to='/admin/painel/cadastrar'>
                <Item
                  active={pathname === "/admin/painel/cadastrar" ? true : false}
                >
                  Cadastrar
                </Item>
              </Link>
            */
          }
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
          <ContainerTitle>
            <InscriptionTitle>Inscrições</InscriptionTitle>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                right: '20%',
                bottom: 0
              }}
            >
              <AiOutlineSearch
                style={{
                  marginRight: '0.5em'
                }}
              />
              <Search
                type='text'
                placeholder='Pesquisar'
                onChange={filterName}
              />
            </div>
          </ContainerTitle>
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
                {loadingIns ? "Carregando..." :
                  <>
                    {filter ?
                      <>
                        {filter.map(item => (
                          <>
                            <InscriptionItem>{item.nome}</InscriptionItem>
                            <InscriptionItem>{item.curso}</InscriptionItem>
                            <InscriptionItem>{item.nome_mini_curso}</InscriptionItem>
                            <InscriptionItem>{item.escola}</InscriptionItem>
                            <InscriptionItem>{item.cidade}</InscriptionItem>
                            <InscriptionItem>{item.data}</InscriptionItem>
                          </>
                        ))}
                      </>
                      :
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

                  </>
                }
              </ItemsContainer>
            </InscriptionCard>
          </InscriptionContainer>
          <Button onClick={() => RelatorioGeral()}>Relatório Geral</Button>
          { /*<Button onClick={() => relatorio(insc)}>Gerar relatorio completo</Button>*/}
          <Button onClick={() => RelatorioProfessor()}>Gerar relatorio Professor</Button>
          <Button onClick={() => RelatorioPorHorario()}>Gerar relatório por Horario</Button>
          <Button onClick={() => RelatorioVagasRestantes()}>Gerar relatório de vagas restantes</Button>
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