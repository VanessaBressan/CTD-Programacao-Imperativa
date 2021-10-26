const Aluno = require('./aluno')

let aluno1 = new Aluno('Bruno', 4, [10, 8, 7, 7])
let aluno2 = new Aluno('Marcela', 1, [8, 10, 6, 9])
let aluno3 = new Aluno('Renata', 0, [4, 8, 10, 6])
let aluno4 = new Aluno('Julia', 2, [3, 10, 10, 8])
let aluno5 = new Aluno('Leandro', 3, [8, 7, 5, 10])
let aluno6 = new Aluno('Leonardo', 0, [6, 8, 6, 6])


let estudantes = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6]

console.log(aluno2.calcularMedia());


module.exports = estudantes;