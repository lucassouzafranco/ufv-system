async function CreateAdmin() {
  const data = {
    email: "teste@teste.com",
    senha: '1234'
  }

  await fetch('http://localhost:3333/auth/create', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => console.log(response.json()))
    .catch(error => console.log(error))

}

async function CreateMini() {
  /*for (let i = 0; i < 22; i++) {
    const data = {
      nome: `teste${i + 1}`,
      sala: "LAE 006",
      curso: "Biologia",
      vagas: i + 1,
      horario: "10:00"
    }
    await fetch('http://localhost:3333/mini/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => console.log(response.json()))
      .catch(error => console.log(error))
  }*/
  const data = [
    {
      nome: "Observação dos microrganismos do ambiente",
      sala: "LAE 233",
      curso: "Biologia",
      vagas: 20,
      horarios: ['09:30', '10:30', '11:30'],
      professor: "Marlon Correa Pereira"
    },
    {
      nome: "As plantas também ficam doentes!",
      sala: "LAE 233",
      curso: "Agronomia",
      vagas: 25,
      horarios: ['09:00', '10:00', '11:00'],
      professor: "Everaldo"
    },
    {
      nome: "Visita ao laboratório de Anatomia Humana",
      sala: "LAE 137",
      curso: "Biologia",
      vagas: 25,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Moema"
    },
    {
      nome: "Quanta vida cabe em uma gota d'água?",
      sala: "LAE 242",
      curso: "Biologia",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00'],
      professor: "Silvana"
    },
    {
      nome: "O mundo secreto das plantas",
      sala: "LAE 243",
      curso: "Biologia",
      vagas: 20,
      horarios: ['10:30', '11:00', '11:30'],
      professor: "Silvana"
    },
    {
      nome: "Evolução Humana",
      sala: "LAE 244",
      curso: "Biologia",
      vagas: 25,
      horarios: ['09:00', '10:00', '11:00'],
      professor: "Rubens Pasa e Karine Frehner Kavalco"
    },
    {
      nome: "Do DNA ao Cromossomo",
      sala: "LAE 244",
      curso: "Biologia",
      vagas: 25,
      horarios: ['09:30', '10:30', '11:30'],
      professor: "Karine Frehner Kavalco e Rubens Pasa"
    },
    {
      nome: "Rótulo dos alimentos: o que ele tem as nos contar?",
      sala: "LAE 129",
      curso: "Nutrição",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00'],
      professor: "Monise Viana Abranches"
    },
    {
      nome: "Conhecendo outras formas de alimentação",
      sala: "LAE 129",
      curso: "Nutrição",
      vagas: 25,
      horarios: ['10:30', '11:00', '11:30'],
      professor: "Bruna Cristina dos Santos Cruz"
    },
    {
      nome: "Como o nutricionista cuida da saúde das pessoas e de populações?",
      sala: "LAE 251",
      curso: "Nutrição",
      vagas: 25,
      horarios: ['09:00', '10:00', '11:00'],
      professor: "Karine Gomes"
    },
    {
      nome: "Nutrição na prática clínica e esportiva",
      sala: "PVA 231",
      curso: "Nutrição",
      vagas: 25,
      horarios: ['10:30', '11:00'],
      professor: "Regiane Lopes de Sales"
    },
    {
      nome: "Introdução à programação",
      sala: "PVA 227",
      curso: "Sistemas de Informação",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Pedro Moiśes de Sousa"
    },
    {
      nome: "Conhecendo os insetos",
      sala: "LAE 241",
      curso: "Agronomia",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Ézio"
    },
    {
      nome: "Exposição dos tratores e máquinas",
      sala: "Gramado",
      curso: "Agronomia",
      vagas: 30,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Mariana e Agro Jr"
    },
    {
      nome: "Desenvolvimento de embalagens ativas",
      sala: "LAE 234",
      curso: "Ciências e Tecnologia de Alimentos",
      vagas: 12,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Allan Robledo Fialho e Morais"
    },
    {
      nome: "Análise Sensorial",
      sala: "LAE 132",
      curso: "Ciências e Tecnologia de Alimentos",
      vagas: 12,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Fabrícia Queiroz Mendes"
    },
    {
      nome: "Laboratório de Hidráulica",
      sala: "LAE 145",
      curso: "Engenharia Civil",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Frederico Carlos Martins de Menezes Filho"
    },
    {
      nome: "Laboratório de Materiais de Construção Civil",
      sala: "LAE 151",
      curso: "Engenharia Civil",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Markssuel Teixeira Marvila"
    },
    {
      nome: "Laboratório de Geotecnia e Asfalto",
      sala: "LAE 144",
      curso: "Engenharia Civil",
      vagas: 15,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Lucas Martins Guimarães"
    },
    {
      nome: "Laboratório de Modelagem em 3D",
      sala: "LAE 248",
      curso: "Engenharia Civil",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Marcus Vinícius Sant Anna"
    },
    {
      nome: "Desenvolvimento de Produtos e Impressão 3D",
      sala: "PVA 301",
      curso: "Engenharia de Produção",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Samuel"
    },
    {
      nome: "Oficina de Simulação Computacional e Inteligência Artificial",
      sala: "PVA 233",
      curso: "Engenharia de Produção",
      vagas: 25,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Thiago"
    },
    {
      nome: "Experiências de Química",
      sala: "LAE 229",
      curso: "Quimica",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Cassiano"
    },
    {
      nome: "Experiências de Química 2",
      sala: "LAE 231",
      curso: "Quimica",
      vagas: 20,
      horarios: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
      professor: "Cassiano"
    },
    {
      nome: "Administração em jogo",
      sala: "auditório LAE 136",
      curso: "Administração",
      vagas: 25,
      horarios: ['09:00', '10:00', '11:00'],
      professor: "Patrícia Rosvadoski da Silva,Raquel Santos Soares Menezes, Rosália Rodrigues Alves, Rosiane Maria Lima Gonçalves"
    },
    {
      nome: "Os diversos campos de atuação do contador",
      sala: "auditório LAE 147",
      curso: "Contaveis",
      vagas: 30,
      horarios: ['09:00', '10:00', '11:00'],
      professor: "Cleyde Cristina e Michelle Vieira"
    }
  ]
  data.forEach(async (item) => {
    await fetch('http://200.17.76.41:3333/mini/create', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY2MzM1OTI1MiwiZXhwIjoxNjYzNDQ1NjUyfQ.9vRWSbCPBuRvkEckDmVpP9r_fWRLBFVSpjp5nv9qLCI',
      }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))

    setTimeout(() => { }, 3000);
  })
}

CreateMini();

async function CreateInscrisao() {
  const data = {
    nome: "Carlos Eduardo Maximo",
    cidade: "Estrela do Indaia",
    email: "carlosjogosbr@gmail.com",
    telefone: "4002-8922",
    escola: "EPAR",
    PCD: "NAO",
    mini_cursos: [
      {
        id: "7befee69-71b0-496e-aa1b-ae193b5ad062",
        nome_mini_curso: "Teste10",
        sala: "LAE 202",
        curso: "Ciências Contábeis",
        horario: "09:00"
      },
      {
        id: "7befee69-71b0-496e-aa1b-ae193b5ad062",
        nome_mini_curso: "Teste10",
        sala: "LAE 202",
        curso: "Ciências Contábeis",
        horario: "09:00"
      }
    ]
  }
  await fetch('http://localhost:3333/inscricao', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY2MzM1OTI1MiwiZXhwIjoxNjYzNDQ1NjUyfQ.9vRWSbCPBuRvkEckDmVpP9r_fWRLBFVSpjp5nv9qLCI',
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

  setTimeout(() => { }, 3000);
}

//CreateInscrisao();