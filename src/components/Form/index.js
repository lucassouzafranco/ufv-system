import React, { useState } from "react";

import Button from "../Button";
import {
  Form as FormC,
  Input,
  InputContainer,
  Title,
  Icon,
  Label
} from './style';

/* Icones */
import IconPessoa from '../../assets/icons/pessoa.png';
import IconCidade from '../../assets/icons/cidade.png';
import IconEmail from '../../assets/icons/email.png';
import IconTel from '../../assets/icons/telefone.png';
import IconEscola from '../../assets/icons/escola.png';

export default function Form() {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [school, setSchool] = useState('');
  const [PD, setPD] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <FormC onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <InputContainer>
          <Icon src={IconPessoa} />
          <Input
            onChange={event => setName(event.target.value)}
            required
            value={name}
            type='text'
            placeholder="Nome"
          />
        </InputContainer>
        <InputContainer>
          <Icon src={IconCidade} />
          <Input
            onChange={event => setCity(event.target.value)}
            required
            value={city}
            type='text'
            placeholder="Cidade"
          />
        </InputContainer>
        <InputContainer>
          <Icon src={IconEmail} />
          <Input
            onChange={event => setEmail(event.target.value)}
            value={email}
            type='email'
            placeholder="Email"
          />
        </InputContainer>
        <InputContainer>
          <Icon src={IconTel} />
          <Input
            onChange={event => setTel(event.target.value)}
            required
            value={tel}
            type='tel'
            placeholder="Telefone"
          />
        </InputContainer>
        <InputContainer>
          <Icon src={IconEscola} />
          <Input
            onChange={event => setSchool(event.target.value)}
            required
            value={school}
            type='text'
            placeholder="Escola"
          />
        </InputContainer>
        <Label>Você é portador de necessidades especiais? Se sim, qual?</Label>
        <InputContainer>
          <Input
            onChange={event => setPD(event.target.value)}
            value={PD}
            required
            type='text'
          />
        </InputContainer>
        <Button type='submit'>Cadastrar</Button>
      </FormC>
    </>
  )
}