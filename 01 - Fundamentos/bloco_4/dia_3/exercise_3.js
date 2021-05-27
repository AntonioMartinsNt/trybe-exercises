// 3- Agora inverta o lado do triângulo. Por exemplo: 
// n = 5

//     *
//    **
//   ***
//  ****
// *****

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.


let n = 5;
const asterisco = "*";
const backSpace = " "
let linha = [];
let position = n;

if (n > 1) {
    for (let index = 1; index <= n; index += 1) {
      for (indexSpace = 1; indexSpace <= n; indexSpace += 1) {
        if (indexSpace < position) {
          linha = linha + backSpace;
        } else {
          linha = linha + asterisco;
        }
      }  
        console.log (linha);
        linha = [];
        position -= 1;
    }
}
