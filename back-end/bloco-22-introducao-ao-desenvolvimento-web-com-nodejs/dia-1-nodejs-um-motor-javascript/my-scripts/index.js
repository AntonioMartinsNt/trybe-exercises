const readline = require('readline-sync');

const scripts = [
  {name: 'Calcular IMC', script: './imc.js'},
  {name: 'Calcular velocidade média', script: './velocidade.js'},
  {name: 'Jogo de adivinhação', script: './sorteio.js'}
];


function listScripts() {
  const list = scripts.map((script, index) => `${index} - ${script.name}`);

  console.log(list);

  const selectedScript = readline.questionInt('Escolha um número para executar o script correspondente: ');

  const script = scripts[selectedScript];
  
  require(script.script);
}

listScripts();