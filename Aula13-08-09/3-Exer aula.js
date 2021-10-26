// {
//     "nome": "Christopher",
//     "profissão": "Programador",
//     "idade": 25,
//     "linguagens": ["PHP", "Javascript", "Dart"],
//     "disponibilidadeParaViajar": true,
//     "ramoProfissional": {
//         "anosDeExperincia": 12,
//         "nivel": "Senior"
//     },
//     "maisUm": "TESTE"
// }

let dadoEntrada = {
    nome: "Christopher",
    profissão: "Programador",
    idade: 25,
    linguagens: ["PHP", "Javascript", "Dart"],
    disponibilidadeParaViajar: true,
    ramoProfissional: {     // -> é uma propriedade do meu objeto literal
        anosDeExperincia: 12,
        nivel: "Senior",
        areaPrincipal: "TI"
    },
    maisUm: "TESTE",

    saudacao: function() {
        return 'Oi Mundo';
    },

    calculo: function() {
        return this.idade - this.ramoProfissional.anosDeExperincia;

    }
};

console.log(dadoEntrada.saudacao());
console.log(dadoEntrada.ramoProfissional.anosDeExperincia);
console.log(dadoEntrada.calculo());