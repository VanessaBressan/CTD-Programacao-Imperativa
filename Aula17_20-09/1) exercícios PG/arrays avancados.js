//.map()
let numeros = [2, 4, 6];

//passamos uma função como callback, ela receberá um parâmetro, q será os elementos do array.
//Nesse caso será um número (num)
let dobro = numeros.map(function(num) {

//definimos o comportamento da função: irá executar 3 vezes e retornará o valor multiplicado por 2    
    return num * 2; //o valor será armazenado na variável dobro

});
console.log(dobro);

//.filter()
let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(function(idade){
    return idade > 18; //booleano
});
console.log(maiores);

//.reduce()
let numeros1 = [5, 7, 16];

let soma = numeros1.reduce(
//passamos uma função como callback, que receberá 2 parâmetros: acumulador (último item retornado) e o numero
//(elemento atual do array):
    function(acumulador, numero){
        return acumulador + numero;
    }
);
console.log(soma);

//forEach()
var paises = ['Brasil', 'Cuba', 'Peru'];

paises.forEach(
//passamos uma função como callback, essa função recebe um parâmetro, que reprensentará cada elemento
//do array, nesse caso, cada país    
    function(pais){
        console.log(pais);
    });