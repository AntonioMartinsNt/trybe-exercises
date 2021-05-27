// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5

// *
// **
// ***
// ****
// *****


let n = 5;
const asterisco = "*";
let linha = [];

if (n > 1) {
    for (let index = 1; index <= n; index += 1) {
        linha = linha + asterisco;
        console.log (linha);
    }
}