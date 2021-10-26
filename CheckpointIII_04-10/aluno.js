// Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number)
// e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// Micro desafio - Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
// Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

function Aluno(nome, nFaltas, notas) {
    this.nome = nome,
    this.nFaltas = nFaltas,
    this.notas = notas,
    this.calcularMedia = function calcularMedia() {
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            media += this.notas[i];        
        }
        return (media/this.notas.length)
    };
    this.faltas = function faltas() {
        return this.faltas++
    }
};

module.exports = Aluno;