//length
console.log("Oi eu sou a Vanessa".length);

//length com variável
texto = "Oi eu sou a Vanessa"
console.log(texto.length);

//indexOf
console.log(texto.indexOf("Vane"));

//slice
console.log(texto.slice(0,2));

//slice com variável
let palavra = texto.slice(0,2);
console.log(palavra);
console.log(texto);

//trim
console.log(texto.trim())

//split
console.log(texto.split(" "))

//replace
let textoNovo = texto.replace('Vanessa','Ana')
console.log(textoNovo)