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
  PcdContainer,
  InputPCD,
  LabelPCD,
  Error,
  ButtonOutline
} from './styleForm';

/* Icones */
import IconPessoa from '../../assets/icons/pessoa.png';
import IconCidade from '../../assets/icons/cidade.png';
import IconEmail from '../../assets/icons/email.png';
import IconTel from '../../assets/icons/telefone.png';
import IconEscola from '../../assets/icons/escola.png';

const Form = () => {

  const navigate = useNavigate();

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
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);


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
    const pcdData = PCD;

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
      pcd: pcdData
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
        <PcdContainer>
          <p>Necessita de algum recurso ou adaptação para participar do evento?</p>
          <LabelPCD>Sim</LabelPCD>
          <InputPCD
            onClick={event => {
              setPCD(event.target.value)
              setDisabled2(!disabled2)
            }}
            required
            disabled={disabled1}
            value="SIM"
            type='checkbox'
          />
          <LabelPCD>Não</LabelPCD>
          <InputPCD
            onClick={event => {
              setPCD(event.target.value)
              setDisabled1(!disabled1)
            }}
            required
            disabled={disabled2}
            value="NAO"
            type='checkbox'
          />
        </PcdContainer>
        
        <Button type='submit'>Cadastrar</Button>
        <ButtonOutline onClick={() => navigate('/verificar')} type='button'>Ver minha inscrição</ButtonOutline>
      </FormC>
    </Fragment>
  )
}

export default Form;