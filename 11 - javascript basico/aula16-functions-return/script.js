/*function soma(num1, num2) {
  return num1 + num2;
}

let resultado1 = soma(10, 5);
console.log(resultado1);

document.write(resultado1); // Impriimir na tela o resultado da função.
*/

function milhasEmKm(milhas) {
  let km = milhas * 1.609;
  return km;
}

let resultado = milhasEmKm(150);
document.write(`O Resultado é: ${resultado} Km`);
