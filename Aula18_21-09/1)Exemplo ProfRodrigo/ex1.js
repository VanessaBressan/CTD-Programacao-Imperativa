const dados = require('./dados');

//
let totalDados = () => {
    console.log('Total', dados.length);
}
console.log('Total', dados.length);

// const homens = dados.filter((dado) => dado.sexo === 'masculino'); //mesma coisa, mais resumido!

const totalHomens = () => {
    return dados.filter((dado) => {
        return dado.sexo === 'masculino';
    });
}
console.log('Total Homens', totalHomens.length);

const totalMulheres = () => {
    return dados.filter((dado) => {
        return dado.sexo === 'feminino';
    });
} 
console.log('Total Mulheres', totalMulheres.length)

const totalAlturaHomens = () => {
    return homens.reduce((grupo, reduzido) => {
        return grupo + reduzido.altura;
    }, 0);    
}

const totalAlturaMulheres = () => {
    return mulheres.reduce((grupo, reduzido) => {
        return grupo + reduzido.altura;
    }, 0);    
}

const mediaAlturaHomens = () => {
    const totalHomens = totalHomens();
    const totalAlturaHomens = totalHomens();
    return totalAlturaHomens / totalHomens.length;
}
console.log('Média Altura Homens', mediaAlturaHomens);

const mediaAlturaMulheres = () => {
    const totalMulheres = totalMulheres();
    const totalAlturaMulheres = totalMulheres();
    return totalAlturaMulheres / totalMulheres.length;
}
console.log('Média Altura Mulheres', mediaAlturaMulheres);

const testeForEach = (tipoAltura = 'maior') => {
    let altura = 0;

    dados.forEach((objeto) => {
        switch(tipoAltura) {
            case 'maior' :
                if (objeto.altura > altura) {
                    altura = objeto.altura;
                }
            break;
            case 'menor' :
                if (altura === 0) {
                    altura = objeto.altura;
                }

                if (objeto.altura < altura) {
                    altura = objeto.altura;
                }
            break;
        }
    });

    return altura;
}

console.log(testeForEach('menor'));