// 4- Depois, faça uma pirâmide com n asteriscos de base:
// n = 5

//   *
//  ***
// *****


let n = 5;
const asterisco = "*";
const backSpace = " "
let linha = [];
let positionright = Math.ceil (n/2);
let positionleft = Math.ceil (n/2);

if (n > 1) {
    for (let index = 1; index <= Math.ceil (n/2); index += 1) {
      for (indexposition = 1; indexposition <= n; indexposition += 1) {
        if (indexposition >= positionleft && indexposition <= positionright) {
          linha = linha + asterisco;
        } else {
          linha = linha + backSpace;
        }
      }  
        console.log (linha);
        linha = [];
        positionright += 1;
        positionleft -= 1;
    }
}
