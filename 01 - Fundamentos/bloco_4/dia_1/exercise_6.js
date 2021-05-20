// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


let peca_xadrez = "peão".toLowerCase()

switch (peca_xadrez) {
    case "peão":
        console.log ("Uma casa à frente. Uma ou duas casa à frente no primeiro movimento da peça");
        break;
    case "torre":
        console.log ("Quantas casas quiser na vertical ou horizontal");
        break;
    case "cavalo":
        console.log ("Anda em L, sendo 1 ou 2 casas num sentido e 1 ou 2 casas em outro sentido perpendicular. Obs: a soma dos sentidos tem que ser 3 casas");
        break;
    case "bispo":
        console.log ("Quantas casas quiser na diagonal");
        break;
    case "rainha":
        console.log ("Quantas casas quiser em qualquer sentido");
        break;
    case "rei":
        console.log ("Apenas uma casa em qualquer sentido");
        break;
}

if (peca_xadrez != "peão" || peca_xadrez != "torre" || peca_xadrez != "cavalo" || peca_xadrez != "bispo" || peca_xadrez != "rainha" || peca_xadrez != "rei") {
    console.log ("ERRO");
}