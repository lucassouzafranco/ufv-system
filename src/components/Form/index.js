import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Dropdown from '../Dropdown';
import {
  Form as FormC,
  Input,
  InputContainer,
  Title,
  Icon,
  Label,
  Error
} from './styleForm';

/* Icones */
import IconPessoa from '../../assets/icons/pessoa.png';
import IconCidade from '../../assets/icons/cidade.png';
import IconEmail from '../../assets/icons/email.png';
import IconTel from '../../assets/icons/telefone.png';
import IconEscola from '../../assets/icons/escola.png';

const Form = () => {

  const regExpTel = /^\+?\d{2}?\s*\(\d{2}\)?\s*\d{4,5}\-?\d{4}$/g;
  const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [school, setSchool] = useState('');
  const [PCD, setPCD] = useState('');
  const [erro, setErro] = useState(
    {
      erroTel: false,
      erroName: false,
      erroMail: false,
      erroCity: false
    }
  );
  const [dpSelected, setDpSelected] = useState('Escolha uma cidade');

  const navigate = useNavigate();

  useEffect(() => {
    function validation() {
      if (tel.length <= 15) {
        let newTel = tel;
        newTel = newTel.replace(/\D/g, "");
        newTel = newTel.replace(/^(\d{2})(\d)/g, "($1) $2");
        newTel = newTel.replace(/(\d)(\d{4})$/, "$1-$2");
        setTel(newTel);
      }
    }
    validation();
  }, [tel])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@USER_DATA"));
    if (user) {
      setName(user.name);
      setDpSelected(user.city);
      setEmail(user.email);
      setPCD(user.pcd);
      setSchool(user.school);
      setTel(user.tel.slice(4));
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault();
    setErro({ erroTel: false, erroName: false, erroMail: false, erroCity: false })
    const nameData = name.trim();
    const emailData = email.trim();
    const telData = '+55 ' + tel.trim();
    const schoolData = school.trim();
    const pcdData = PCD.trim();

    if (!(regExpEmail.test(emailData))) {
      setErro({ erroMail: true });
      return;
    }

    if (!(regExpTel.test(telData))) {
      setErro({ erroTel: true });
      return;
    }

    if (name.length < 3) {
      setErro({ erroName: true });
      return;
    }
    if (dpSelected === 'Escolha uma cidade') {
      setErro({ erroCity: true });
      return;
    }

    const data = {
      name: nameData,
      city: dpSelected,
      email: emailData,
      tel: telData,
      school: schoolData,
      pcd: pcdData ? 'SIM' : 'NAO'
    }

    await localStorage.setItem("@USER_DATA", JSON.stringify(data));

    navigate('/cursos');
  }

  return (
    <Fragment>
      <FormC onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <InputContainer>
          <Icon src={IconPessoa} />
          <Input
            onChange={event => setName(event.target.value)}
            required
            value={name}
            type='text'
            placeholder='Nome'
          />
        </InputContainer>
        {erro.erroName && (<Error>Nome inválido.</Error>)}
        <InputContainer>
          <Icon src={IconCidade} />
          <Dropdown selected={dpSelected} setSelected={setDpSelected} />
        </InputContainer>
        {erro.erroCity && (<Error>Escolha uma cidade por favor.</Error>)}
        <InputContainer>
          <Icon src={IconEmail} />
          <Input
            onChange={event => setEmail(event.target.value)}
            value={email}
            type='email'
            placeholder='Email'
          />
        </InputContainer>
        {erro.erroMail && (<Error>Email inválido</Error>)}
        <InputContainer>
          <Icon src={IconTel} />
          <Input
            onChange={event => setTel(event.target.value)}
            required
            value={tel}
            maxLength={15}
            type='tel'
            placeholder='Telefone'
          />
        </InputContainer>
        {erro.erroTel && (<Error>Telefone inválido</Error>)}
        <InputContainer>
          <Icon src={IconEscola} />
          <Input
            onChange={event => setSchool(event.target.value)}
            required
            value={school}
            type='text'
            placeholder='Escola'
          />
        </InputContainer>
        <Label>Você é portador de necessidades especiais? Se sim, qual?</Label>
        <InputContainer>
          <Input
            onChange={event => setPCD(event.target.value)}
            value={PCD}
            type='text'
          />
        </InputContainer>
        <Button type='submit'>Cadastrar</Button>
      </FormC>
    </Fragment>
  )
}

export default Form;