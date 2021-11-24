let nome = prompt("Qual o seu nome?");
let sobreNome = prompt('Qual o seu sobrenome?') 
let idade = prompt("Qual a sua idade?");

const boasVindas = () => {
  if (idade >= 18) {
    return `Olá ${nome} ${sobreNome}, você tem ${idade} anos. Você é maior de idade`;
  } else {
    return `Olá ${nome}, você tem ${idade} anos. Você é menor de idade`;
  }
};
document.write(boasVindas());