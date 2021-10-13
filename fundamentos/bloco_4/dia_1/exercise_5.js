// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.


let angulo1 = 0;
let angulo2 = 45;
let angulo3 = 90;

if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
}
else if (angulo1 + angulo2 +angulo3 !== 180) {
    console.log("false")
}

if (angulo1 < 1 || angulo1 > 178) {
    console.log("erro");
}
if (angulo2 < 1 || angulo1 > 178) {
    console.log("erro");
}
if (angulo3 < 1 || angulo1 > 178) {
    console.log("erro");
}