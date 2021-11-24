let nome = prompt("Qual o seu nome?");

let idade = prompt("Qual a sua idade?");

const thomasAnderson = "Thomas Anderson";

const boasVindas = () => {
  if (idade >= 18 && nome != "thomas anderson") {
    return `Olá ${nome[0].toUpperCase()}${nome.slice(
      1
    )}, você tem ${idade} anos. Você é maior de idade`;
  } else if (
    (idade >= 18 && nome === "thomas anderson") ||
    nome === "THOMAS ANDERSON" ||
    nome === "Thomas Anderson"
  ) {
    return `Olá ${thomasAnderson}, você tem ${idade} anos. Você é personagem do filme Matrix!`;
  } else if (
    (idade < 18 && nome === "thomas anderson") ||
    nome === "THOMAS ANDERSON" ||
    nome === "Thomas Anderson"
  ) {
    return `Olá ${thomasAnderson}, você tem ${idade} anos. Você é personagem do filme Matrix e menor de idade!`;
  } else {
    return `Olá ${nome[0].toUpperCase()}${nome.slice(
      1
    )}, você tem ${idade} anos. Você é menor de idade`;
  }
};
document.write(boasVindas());
