const readline = require('readline-sync');

function averageVelocity(distance, time) {
  const avgVel = distance / time
  return console.log(`Velocidade média: ${avgVel}m/s`); 
}

function userInfo() {
  const distance = readline.questionInt('Qual a distância percorrida? (em metros)');
  const time = readline.questionInt('Qual o tempo gasto para percorrer essa distância? (em segundos)')

  averageVelocity(distance, time);
}

userInfo();
