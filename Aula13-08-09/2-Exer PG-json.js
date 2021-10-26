//JSON.parse():
let dadosJson = '{"cidade": "São Paulo", "bairro": "Morumbi"}';
let dadosConvertidos = JSON.parse(dadosJson);

console.log(dadosConvertidos);

//JSON.stringify:
let objetoLiteral = {nome:'Carla', pais: 'Brasil'};
let dadosConvertidos2 = JSON.stringify(objetoLiteral);

console.log(dadosConvertidos2);

//Exemplo vídeo PG
console.log('*exemplo 1 PG');
let pessoa = {
    nome: 'Vanessa',
    idade: '28',
    altura: 1.80
}
let json = JSON.stringify(pessoa);
console.log(json)

let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);

//Exemplo 2 vídeo PG
console.log('*exemplo 2 PG');
let listaCompras = ['pão','presunto','queijo']

let json1 = JSON.stringify(listaCompras);
console.log(json1);

let arrayDeNovo = JSON.parse(json1);
console.log(arrayDeNovo);
