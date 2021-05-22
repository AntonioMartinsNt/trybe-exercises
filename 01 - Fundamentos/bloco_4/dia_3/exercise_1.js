// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****


let n = 3;
const asterisco = "*";
let linhas = [];

if (n > 1) {
    for (let index = 0; index < n; index += 1) {
        linhas = linhas + asterisco;
    }    
    for  (let nlinhas = 0; nlinhas < n; nlinhas += 1) {
        console.log (linhas);
    }
}
