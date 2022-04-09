const fs = require('fs').promises;

const newArray = [
  'Finalmente',
  'estou',
  'usando',
  'Promise.all',
  '!!!'
]

async function readAndWrite() {
  const createPromises = newArray.map((text, index) => fs.writeFile(`./file${ index + 1 }.txt`, text));

  await Promise.all(createPromises);

  const filesArray = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];
  
  const readFiles = await Promise.all(filesArray.map(file => fs.readFile(file, 'utf-8')));

  const fileAll = readFiles.join(' ');
  
  await fs.writeFile('./fileAll.txt', fileAll);
}

readAndWrite();