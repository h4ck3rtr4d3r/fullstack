for(let contador = 0; contador <= 10; contador++){
  document.write(`Hello World ${contador}`)
  document.write("<br>")
}



let opcoes

for(let contador = 2021; contador >= 1900; contador--) {
  opcoes += `<option>${contador}</option>`
}

document.querySelector(`#ano`).innerHTML = opcoes

let lista = ''

let clientes = ['Thiago', 'Amanda', 'Rafael', 'Felipe','Tabata']

for(let contador = 0; contador <= clientes.length-1; contador++){
  lista += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector(`#listaClientes`).innerHTML = lista

