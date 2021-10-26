let listaCompras = ['Arroz', 'Feijão', 'Macarrão', 'Café', 'Chá', 'Queijo', 'Ovo']

console.log('length -> exibe o número de elementos do array:')
console.log(+ listaCompras.length + '\n')

console.log('join() -> transforma os elementos do array em string:')
console.log('O array transformado em string: ' + listaCompras.join('-') + '\n')


console.log('pop() -> remove e retorna o último elemento do array')
console.log('último elemento:')
let ultimoElemento = listaCompras.pop()
console.log(ultimoElemento)
console.log('Novo array sem o último elemento:')
console.log(listaCompras)

console.log('push()-> adiciona um elemento ao final do array')
listaCompras.push(ultimoElemento)

console.log('shift() -> remove e retorna o primeiro elemento do array')
let primeiroElemento = listaCompras.shift()
console.log('Primeiro elemento do array')
console.log(primeiroElemento)
console.log('Sem o primeiro elemento')
console.log(listaCompras)

console.log('unshift() -> adiciona um elemento no início')
listaCompras.unshift(primeiroElemento)
console.log('Array com o primeiro elemento adicionado')
console.log(listaCompras)

console.log('indexOf() -> pesquisa por algum elemento ou caractere no array')
console.log(listaCompras.indexOf('Café'))

console.log('"Chocolate"?')
console.log(listaCompras.indexOf('Chocolate'))

console.log('lastIndexOf()')
console.log(listaCompras.lastIndexOf('Feijão'))

console.log('includes() -> pesquisa por algum elemento ou caractere')
console.log('"Ovo"?')
console.log(listaCompras.includes('Ovo'))
console.log('"Alface"?')
console.log(listaCompras.includes('Alface'))