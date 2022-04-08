const readline = require('readline-sync');

function sortNumber() {
  return Math.round(Math.random() * 10);
}

function testShot(Sort, Answer) {
  if (Sort == Answer) {
    return console.log('Parabéns, número correto!');
  } else {
    return console.log(`Opa, não foi dessa vez. O número era ${Sort}.`); 
  }
}

function guessingGame() {
  const numberSorted = sortNumber();

  const numberAnswered = readline.questionInt('Adivinhe um número entre 0 e 10:');

  testShot(numberSorted, numberAnswered);

  const playAgain = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não)');

  if(playAgain !== 's') {
    return console.log('Bye!');
  }

  guessingGame();
}

guessingGame();