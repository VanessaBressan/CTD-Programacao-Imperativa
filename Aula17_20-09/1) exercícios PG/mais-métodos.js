//slice()
let numeros = [3, 4, 5, 6, 7];
let subArray = numeros.slice(0, 3);

console.log(subArray);

//splice()
let numeros1 = [3, 4, 5, 6, 7];
numeros1.splice(0, 0, 2); //parâmetros: inicio=0, eliminar 0 elementos e adiciona o valor 2
console.log(numeros1);

numeros1.splice(1, 2); //parâmetros: inicio = 1 e iremos eliminar 2 elementos a partir do inicio.
console.log(numeros1);

//sort()
let marcas = ['samsung', 'xiaomi', 'apple'];
marcas.sort();
console.log(marcas);

let numeros2 = [10, 3, 4, 52, 6, 7];
numeros2.sort((a,b) => a-b)
console.log(numeros2);
//ou:
numeros2.sort(
    function(a, b) {
        return a-b;
    });
console.log(numeros2)

//flat()
let numeros3 = [1, 2, 3, [4], [[5, 6]]];
let novoArray = numeros3.flat(); //omitindo o nível, por padrão é 1
console.log(novoArray);

novoArray = numeros3.flat(2); //definindo nível 2
console.log(novoArray);

//includes()
let numeros4 = [3, 4, 5, 6, 7];
let existe = numeros4.includes(4); //parâmetro=4, irá buscar o número 4 dentro do array
console.log(existe);

existe = numeros4.includes(4, 2); //parâmetro=4, irá buscar o número 4, a partir do índice 2
console.log(existe);

//find()
let moedas = [
    {nome: 'Bitcoin', simbolo: 'BTC' },
    {nome: 'Bitcoin', simbolo: 'BTC' },
    {nome: 'Ethereum', simbolo: 'ETH' },
    {nome: 'Cardano', simbolo: 'ADA' },
];

moedas.find(
    function (moeda) {
        return moeda.nome === 'Bitcoin';
});
