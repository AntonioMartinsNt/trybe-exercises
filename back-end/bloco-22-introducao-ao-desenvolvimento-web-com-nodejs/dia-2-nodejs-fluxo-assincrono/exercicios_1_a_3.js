function exercicio1(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error("Informe apenas números"));
    }

    const calc = (a +b) * c;

    if (calc < 50) {
      return reject(new Error("Valor muito baixo"));
    }

    resolve(calc);
  })

  return promise;

}

async function exercicio2() {
  let a = Math.floor(Math.random() * 100 + 1);
  console.log(a);
  let b = Math.floor(Math.random() * 100 + 1);
  console.log(b);
  let c = Math.floor(Math.random() * 100 + 1);
  console.log(c);

  try {
    const calc = await exercicio1(a, b, c);
    console.log(calc);
  } catch (error) {
    console.log(error)
  };
}

exercicio2();
