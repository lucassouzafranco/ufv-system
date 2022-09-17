const courses = [
  {
    id: 1,
    title: "Administração",
    src: '/assets/img/adm.png'
  },
  {
    id: 2,
    title: "Agronomia",
    src: '/assets/img/agro.png'
  },
  {
    id: 3,
    title: "Biologia",
    src: '/assets/img/bio.png'
  },
  {
    id: 4,
    title: "Contábeis",
    src: '/assets/img/conta.png'
  },
  {
    id: 5,
    title: "Ciências e Tecnologia de Alimentos",
    src: '/assets/img/alimentos.png'
  },
  {
    id: 6,
    title: "Engenharia Civil",
    src: '/assets/img/eng-civil.png'
  },
  {
    id: 7,
    title: "Engenharia de Produção",
    src: '/assets/img/eng-prod.png'
  },
  {
    id: 8,
    title: "Nutrição",
    src: '/assets/img/nutricao.png'
  },
  {
    id: 9,
    title: "Quimica",
    src: '/assets/img/quimica.png'
  },
  {
    id: 10,
    title: "Sistemas de Informação",
    src: '/assets/img/si.png'
  }
]

courses.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  } else {
    return true;
  }
})

export { courses };