//Função declarada
function darOi(){
    console.log("Olá, tudo bem?");
}
darOi();
darOi();

//função expressa

let somar = function(){
    console.log(1+1);
}
somar();

//Passando parâmetros para função
let soma = function(num1, num2){
    console.log(num1 + num2);
}
soma(1, 5);

//escopo
let resultado = 0;
console.log("Resultado fora da função =", resultado);

function multiplicar(numA, numB) {
    resultado = numA * numB;

    console.log("Resultado dentro da função =", resultado);
}
multiplicar(2,2);
