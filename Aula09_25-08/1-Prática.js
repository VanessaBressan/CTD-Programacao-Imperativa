//1 - Escreva uma função utilizando uma estrutura básica de IF/ELSE que verifique uma senha.
// A senha válida é o número 1234. Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida.
	
function verificarSenha(senha) {

if (senha === 1234) {
    console.log('ACESSO PERMITIDO');
} else {
    console.log('ACESSO NEGADO');
}
}
verificarSenha(1235);

//2 Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE 
//que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.

function inteiros(int1, int2) {

    if (int1 > int2) {
        console.log('O primeiro número é maior que o segundo!');
    } else if (int1 < int2) {
        console.log('O primeiro número é menor que o segundo!');
    } else {
        console.log("Os dois números são iguais!")
    }
}
inteiros(5, 5);

//3 Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
//- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'

function validarMes(mes) {
    switch(mes) {
        case 1:
            console.log('Janeiro');
            break;
        case 2:
            console.log('Fevereiro');
            break;
        case 3:
            console.log('Março');
            break;
        case 4:
            console.log('Abril');
            break;
        case 5:
            console.log('Maio');
            break;
        case 6:
            console.log('Junho');
            break;
        case 7:
            console.log('Julho');
            break;
        case 8:
            console.log('Agosto');
            break;
        case 9:
            console.log('Setembro');
            break;
        case 10:
            console.log('Outubro');
            break;
        case 11:
            console.log('Novembro');
            break;
        case 12:
            console.log('Dezembro');
            break
    }
}
validarMes(10);

//4 Reescreva função do exercício 1, utilizando o operador ternário.
function verificarSenha(senha) {
    return senha === 1234 ? console.log('ACESSO PERMITIDO') : console.log('ACESSO NEGADO');
}
verificarSenha(1264);