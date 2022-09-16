const data = {
  email: "teste@teste.com",
  senha: '1234'
}

fetch('http://localhost:3001/auth/create', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {"Content-type": "application/json; charset=UTF-8"}
})
  .then(response => console.log(response.json()))
    .catch(error => console.log(error))