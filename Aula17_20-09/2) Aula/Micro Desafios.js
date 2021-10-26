// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie
// um novo array com apenas números ímpares.

let numerosPares = [2, 4, 6, 8, 10, 12];

let numerosImpares = numerosPares.map(function (numero) {
    return numero - 1;
});
console.log(numerosImpares);

// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o
// .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Júlia', 'Maria', 'Gustavo', 'Daniel', 'Maria', 'João'];

let nomesFiltrados = nomes.filter(nome => nome == 'Maria')
console.log(nomesFiltrados);

// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let numeros = [1, 5, 9, 3, 7];

let numerosFormatados = numeros.reduce((anterior, atual) => anterior + '-' + atual);
console.log(numerosFormatados);

//4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() 
//e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['cachorro', 'vaca', 'cobra', 'coelho', 'macaco'];
animais.forEach(animal => console.log('O animal é ' + animal))