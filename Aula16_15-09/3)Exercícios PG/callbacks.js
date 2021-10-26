const somar = (numA, numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao(numA, numB);

console.log(calculadora(10, 20, somar))

console.log(calculadora(10, 20, (numA, numB) => numA-numB))