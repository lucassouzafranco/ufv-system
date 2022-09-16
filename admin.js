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
  for (let i = 0; i < 16; i++) {
    const data = {
      nome: `Mapeamento Termogenico de Organelas ${i + 1}`,
      sala: `LAE 0${i + 1}`,
      curso: "Biologia",
      vagas: 16,
      horario: "10:00"
    }
    await fetch('http://localhost:3333/mini/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    setTimeout(() => { }, "3000");
  }

}

//CreateMini();

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
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
}

CreateInscrisao();