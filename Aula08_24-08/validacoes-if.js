//ir, else if, else
let dia = 'sábado';

if(dia == 'domingo') {
    console.log('Vou para praia!');
} else if(dia == 'sábado') {
    console.log('Vou para o cinema!');
} else {
    console.log('Vou trabalhar!');
}


//if ternário
let oMaior = 4 < 10 ? 'O 4 é maior' : 'O 10 é maior';
console.log(oMaior);

let dia2 = 'segunda';

let resultado = dia2 == 'domingo'? 'Vou a praia' : 'Fico em casa';
console.log(resultado);

//switch
switch(dia){
    case 'segunda':
        console.log('Vou tomar café');
        break;
    case 'quarta':
        console.log('Vou ao cinema');
        break;
    default:
        console.log('Não vou fazer nada');
}