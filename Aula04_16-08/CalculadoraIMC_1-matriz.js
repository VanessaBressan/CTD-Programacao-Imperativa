let nome = [];
nome[1] = "José";
nome[2] = "Carlos";
nome[3] = "Aline";
nome[4] = "Ana";

let sobrenome = [];
sobrenome [1] = "da Silva";
sobrenome [2] = "de Souza";
sobrenome [3] = "Ferreira";
sobrenome [4] = "Paula";

let idade = []
idade [1] = 27;
idade [2] = 28;
idade [3] = 33;
idade [4] = 26;

let peso = [];
peso [1] = 83.5;
peso [2] = 80.1;
peso [3] = 63.7;
peso [4] = 55.0;

let altura = [];
altura [1] = 1.70;
altura [2] = 1.76;
altura [3] = 1.53;
altura [4] = 1.62;

let plano = [];
plano [1] = true;
plano [2] = true;
plano [3] = false;
plano [4] = true;

let imcJose = peso[1] / (altura [1] ** 2);
let imcCarlos = peso[2] / (altura [2] ** 2);
let imcAline = peso[3] / (altura [3] ** 2);
let imcAna = peso[4] / (altura [4] ** 2);

console.log (nome[1] + '', sobrenome[1], "tem" + '', idade[1], "anos", "e seu índice de massa corporal é de", ''+ imcJose);
console.log (nome[2] + '', sobrenome[2], "tem" + '', idade[2], "anos", "e seu índice de massa corporal é de", ''+ imcCarlos);
console.log (nome[3] + '', sobrenome[3], "tem" + '', idade[3], "anos", "e seu índice de massa corporal é de", ''+ imcAline);
console.log (nome[4] + '', sobrenome[4], "tem" + '', idade[4], "anos", "e seu índice de massa corporal é de", ''+ imcAna);


