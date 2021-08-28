let clientes = [
  {
    nome: 'Felipe',
    idade: 39,
    linguagens: ['JavaScript', 'C++', 'Python']
  },
  {
    nome: 'Fulano',
    idade: 22,
    linguagens: ['C#', 'php', 'Ruby']
  },

  {
    nome: 'Ciclano',
    idade: 19,
    linguagens: ['go', 'closure', 'r']

  }
]

let htmlClientes = ''

for (let cliente of clientes) {
  
  let listaLinguagens = ''

  for(let linguagem of cliente.linguagens) {
    listaLinguaguens += `<li>${linguagem}</li>`
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