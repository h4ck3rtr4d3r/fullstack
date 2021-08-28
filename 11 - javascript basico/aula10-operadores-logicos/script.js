let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2
 if (media >= mediaMinima) {
   document.write('Parabéns, você foi aprovado')
 } else if (media < mediaMinima) {
   document.write('Você não foi aprovado')
 }

