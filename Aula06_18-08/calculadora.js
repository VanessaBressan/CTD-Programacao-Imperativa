// Calculadora Nível I
// 1.Crie um arquivo calculadora.js que terá as diferentes operações para realizar.
// 2.Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(num1,num2){
    return num1 + num2;
}
console.log(adicionar(1,2));

// 3.Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtração(num1,num2){
    return num1 - num2;
}
console.log(subtração(4,2));

// 4.Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicação(num1,num2){
    return num1 * num2;
}
console.log(multiplicação(4,2));

// 5.Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisão(num1,num2){
    return num1 / num2;
}
console.log(divisão(6,2));

// Calculadora Nível II

// 1.No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log 
//no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, 
//por exemplo: console.log ("-------------- Teste de Operações / Calculadora --------------")
console.log ("-------------- Teste de Operações / Calculadora --------------");

// 2.Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos.
//Mostrar resultados no console.
console.log("Soma de ", a, " + ", b, " = ", adicionar(a, b))
console.log("Subtração de ", a, " - ", b, " = ", subtracao(a, b))

// 3.Execute a função que multiplica, passando quaisquer dois números como argumentos. 
//Mostre o resultado no console.
console.log("Multiplicação de ", a, " * ", b, " = ", multiplicacao(a, b))

// 4.Execute a função que faz divisão, passando quaisquer dois números como argumentos. 
//Mostre o resultado no console.
console.log("Divisão de ", a, " / ", b, " = ", divisao(a, b))

// 5.Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos.
//Mostre o resultado no console.
console.log("Divisão de ", a, " / 0 = ", divisao(a, 0))


// Calculadora - Nível III - Funções Extras

// 1.Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse 
//número multiplicado por ele mesmo, ou seja, ao quadrado. // Importante: quadradoDoNumero() deve usar a 
//função multiplicação() para calcular o quadrado do parâmetro inserido em power().

let quadradoDoNumero = function(a){
    b = a;
    return multiplicacao(a, b)
}
console.log("Quadrado do nº: " + quadradoDoNumero(3))

// 2.Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por 
//parâmetro. Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente
//em nossa calculadora.

let mediaDeTresNumeros = function(a, b, c){
    let d = adicionar(a, b) + c
    return divisao(d, 3).toFixed(2)
}

console.log("Média três números " + mediaDeTresNumeros(13,5,38))


// 3.Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que 
//deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300).
// Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

let calculaPorcentagem = function (total, percentual) {
    let d = divisao(total, 100)
    let e = multiplicacao(d, percentual)
    return e;
} 
console.log(calculaPorcentagem(300,15))


// 4.Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do 
//primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

let geradorDePorcentagem = function (valorA, valorB) {
    return (valorA*100)/valorB
}
console.log(geradorDePorcentagem(2,200) + "%")


console.log("Ao quadrado: ", quadradoDoNumero(a))
console.log("Média ", mediaDeTresNumeros(a, b, c))
console.log("Percentual: ", calculaPorcentagem(200, 20))
console.log("Gerador de porcentagem: ", geradorDePorcentagem(10, 150))