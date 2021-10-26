//exercício 1:
let filmes = ['stars wars', 'matrix', 'robot', 'o preço do amanhã', 'a vida é bela']
let frutas = ['maça', 'banana', 'maracujá', 'pêssego', 'melancia']

function converterMaiusculas(array){
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index].toUpperCase();
    }
    return array;
}
console.log(filmes);
console.log(converterMaiusculas(filmes));


//exercício 2:
function trocarElementos(array1, array2) {
    
    console.log('entrada - ', array2);
    
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());
    array1.push(array2.pop().toUpperCase());

    console.log('saida - ', array2);

    return array1;
}
saida = trocarElementos(filmes, frutas);
console.log(saida);


