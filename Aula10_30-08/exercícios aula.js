// a. Acesse elementos específicos de um Array
let frutas = ['Maça', 'Banana', 'Melão', 'Amora']

console.log('a. Acesse elementos específicos de um Array')
console.log(frutas[1]) // retorna 'banana'

// b. Modifique cada um dos elementos de um array e imprima no console
frutas[0] = 'Maça'
frutas[1] = 'Banana'
frutas[2] = 'Melão'
frutas[3] = 'Amora'

console.log('b. Modifique cada um dos elementos de um array e imprima no console')
console.log(frutas)

// c. Adicione elemento a um array
frutas.push('Morango')
console.log('c. Adicione um elemento a um array')
console.log(frutas)

// d. Extraia elementos de um array
console.log('d. Extraia elementos de um array')
frutas.pop()
console.log('Array com último elemento removido:')
console.log(frutas)
frutas.shift()
console.log('Array com primeiro elemento removido:')
console.log(frutas)

// e. Compare elementos de uma array com os elementos de outro
let roupas = ['calça', 'blusa', 'casaco', 'shorts']

console.log('e. Compare elementos de um array com os elementos de outro')
console.log('blusa existe no Array roupas?')
console.log(roupas.includes(frutas[0]))  