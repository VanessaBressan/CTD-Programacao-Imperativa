// 5. Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

function remuneracao(salario, horasTrabalhadas) {
    let hora = salario / horasTrabalhadas;
    console.log(hora);
}
remuneracao(1000, 8);