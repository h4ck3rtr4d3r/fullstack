let diaSemana = new Date().getDay();

let nomeDiaSemana

switch (diaSemana) {
  case 0:
    nomeDiaSemana = 'domingo'
    break;
  case 1:
    nomeDiaSemana = 'segunda-feira'
    break;
  case 2:
    nomeDiaSemana = 'terça-feira'
    break;
  case 3:
    nomeDiaSemana = 'quarta-feira'
    break;
  case 4:
    nomeDiaSemana = 'quinta-feira'
    break;
  case 5:
    nomeDiaSemana = 'sexta-feira'
    break;
  case 6:
    nomeDiaSemana = 'sábado'
  default:
    break;
}

document.write(`O dia da semana é: ${nomeDiaSemana}`) // O dia da semana é: sábado