let playlist = ['heavy metal', 'pisadinha','funk brega','mpb','pop','sertanejo']

//posições -> 0 .. 5 = tamanho 6
console.log(playlist.length)

//for (inicio, condicao de parada, incremento/decremento)
console.log('*For*')
for (let i=0; i<playlist.length; i++) {
    console.log('posição ' + i + ' estilo ' + playlist[i]);
}
console.log('\n');

//de trás pra frente:
console.log('*For de trás pra frente*')
for (let i=playlist.length-1; i>=0; i--) {
    console.log('posição ' + i + ' estilo ' + playlist[i]);
}
console.log('\n');

//com while:
console.log('*While*')
let index = 0;
while (index < playlist.length) {
    console.log('posição ' + index + ' estilo ' + playlist[index]);
    index++;
}
console.log('\n');

//com do while:
console.log('*Do While*')
let index1 = 0;
do {
    console.log('posição ' + index1 + ' estilo ' + playlist[index1]);
    index1++;
} while (index1 < playlist.length);