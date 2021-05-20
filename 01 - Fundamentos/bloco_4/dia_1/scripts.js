const name = "Antonio Martins Neto";

const birthCity = "Fortaleza";

let birthYear = 1991;

console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear = 2030

console.log(birthYear);

// birthCity = "São Paulo"

// console.log(birthCity);


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

patientId = "50";

console.log(typeof patientId);


let base = 5;
let altura = 8;

let area = base * altura;

console.log(area);

let perimetro = 2*base + 2*altura;

console.log(perimetro);


let nota = 85;
let status;

if (nota >= 80){
    status = "aprovada"
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (nota < 80 && nota >= 60){
    status = "lista"
    console.log("Você está na nossa lista de espera")
}
else {
    status = "reprovada"
    console.log("Você foi reprovada(o)")
}


switch (status) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovada(o)");
        break;
    default:
        console.log("não se aplica")
}
