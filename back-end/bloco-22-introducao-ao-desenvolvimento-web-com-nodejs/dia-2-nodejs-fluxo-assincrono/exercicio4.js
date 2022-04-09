const { get } = require('http');

const fs = require('fs').promises;

function readData() {
  simpsons.map(e => console.log(`${e.id} - ${e.name}`));
}

async function getSimpsonById(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then(content => JSON.parse(content));

  const selectedId = simpsons.find(simpson => simpson.id == id);

  if (!selectedId) {
    return new Error("id não encontrado");
  }

  return selectedId;
}

getSimpsonById(30)
  .then(result => console.log(result))
  .catch(error => console.log(error));
