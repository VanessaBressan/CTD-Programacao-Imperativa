// Transforme as seguintes funções em arrow functions:

// function print(mensagem){
//     console.log(mensagem)
// }
// print("Olá, bom dia")
    
let mensagem = (mensagem) => mensagem;
console.log(mensagem('Olá, bom dia'));
    
// function soma(n1, n2){
//     return n1 + n2
// }
// console.log(soma(10, 10))


let somar = (n1, n2) => n1 + n2;
console.log(somar(2,3));


// Compreender a utilização das callbacks e suas aplicações.

// Crie uma função acaoCarro(), que receberá uma callback como parâmetro. 
// Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando
// e parar() – deve exibir uma mensagem dizendo que o carro parou.
// Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

function acaoCarro (outraFuncao) {
    return outraFuncao()
}

function andar(){
    console.log("O carro está andando");
}

function parar() {
    console.log("O carro parou");
}

acaoCarro(andar);
acaoCarro(parar);