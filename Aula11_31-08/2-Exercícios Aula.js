// Repetir como um papagaio
// estrutura básica for (início, condição, incremento ou decremento)

for (let index=0; index <= 4; index++) {
    console.log(index + " Quero Biscoito");
}

// Contando número ímpares de 1 a 100
// estrutura básica do while:
// while (condicaoDeParada) {
//     ação
//     incremento/decremento no contador
// }


// média da turma
var dados = [];
var media = 0;
var mediaGeral = 0;

//criar o nosso array de dados de alunos:
dados[0] = [ "aluno 1", 7, 8, 7, 8 ]; // 0 nome do aluno
dados[1] = [ "aluno 2", 9, 9, 7, 7 ];
dados[2] = [ "aluno 3", 8, 8, 9, 10 ];
dados[3] = [ "aluno 4", 9, 9, 10, 6 ];

for (let inicio = 0; inicio < dados.length; inicio++) {
    // media Aluno
    var mediaAluno = (dados[inicio][1] + dados[inicio][2] + dados[inicio][3] + dados[inicio][4]) / (dados[inicio].length-1);
    
    media += mediaAluno; //acumula

    console.log(dados[inicio][0] + ' - ' + mediaAluno);
}

mediaGeral = media / dados.length;

console.log(mediaGeral)