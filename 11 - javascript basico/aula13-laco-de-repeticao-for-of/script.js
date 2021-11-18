let clientes = [
  {
    nome: 'Felipe',
    idade: 39,
    linguagens: ['JavaScript', 'C++', 'Python']
  },
  {
    nome: 'Tabata',
    idade: 22,
    linguagens: ['C#', 'php', 'Ruby']
  },

  {
    nome: 'Ariella',
    idade: 19,
    linguagens: ['go', 'closure', 'r']

  },

  {
    nome: 'Dominic',
    idade: 13,
    linguagens: ['JavaScript', 'C#', 'C++']
  }

]

let htmlClientes = ''

for (let cliente of clientes) {
  
  let listaLinguagens = ''

  for(let linguagem of cliente.linguagens) {
    listaLinguagens += `<li>${linguagem}</li>`
  }
  
  htmlClientes += `
    <li>
      <b>Nome:</b>${cliente.nome} <br>
      <b>Idade:</b> ${cliente.idade} <br>
      <b>Linguagens:</b> <br>
       <ul>
      ${listaLinguagens}
       </ul>
     </li>
  `

}

document.querySelector(`#listaClientes`).innerHTML = htmlClientes