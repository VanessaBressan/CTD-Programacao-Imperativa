let pais = {
    nome: 'Brasil',
    populacao: '202768562',
    capital: 'Brasília',
    nacionalidade: function () {
        return "Sou do " + this.nome;
    }
};
console.log(pais);
console.log('A capital do ' + pais.nome + ' é ' + pais.capital);
console.log(pais['capital']);
console.log('\n');

//para acessar a função:
console.log('** Acessando a função:');
console.log(pais.nacionalidade());
console.log('\n');

//função construtora:
console.log('*Função Construtora*')
let carro = {
    marca: 'Fiat',
    modelo: 'Uno',
};

function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}
console.log(carro);
console.log(new Carro('Renault', 'Clio'));