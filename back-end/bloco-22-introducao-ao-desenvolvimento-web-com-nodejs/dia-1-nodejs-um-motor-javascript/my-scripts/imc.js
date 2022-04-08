const readline = require('readline-sync');

function calcIMC(weight, height) {
  return weight / Math.pow(height,2);
}

function situationIMC(imc) {
  console.log(`Seu IMC é: ${imc}`);
  if (imc <=18.5) {
    console.log('Abaixo do peso (magreza)'); 
  } else if(imc > 18.5 && imc <= 24.9) {
    console.log('Peso normal');
  } else if(imc > 24.9 && imc <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } else if(imc > 29.9 && imc <= 34.9) {
    console.log('Obesidade grau I');
  } else if(imc > 34.9 && imc <= 39.9) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade graus III e IV');
  }
}

function userInfo() {
  const weight = readline.questionFloat('Qual seu peso? (em quilos)');
  const height = readline.questionFloat('Qual sua altura? (em metros)');

  const IMC = calcIMC(weight, height);
  situationIMC(IMC);
}

userInfo();
