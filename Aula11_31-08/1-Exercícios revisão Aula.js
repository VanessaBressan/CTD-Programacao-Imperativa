// aula 10 - revisão
// join
// código 1

let array2 = ["o","l","á"]

function joinArray(array) {
    let arrayJoined = array[0] + array[1] + array[2]
    return console.log(arrayJoined);
}
joinArray(array2)

// código 2
let juntar = ["O","l","á"]

function tudoJunto() {
    return juntar[0] + juntar[1] + juntar[2]
}
console.log(tudoJunto())

// código 3
let funcaoJoin = function(valorA, valorB) {
    return valorA+valorB;
}
console.log(["t","c","h","a","u"].reduce(funcaoJoin)) //método REDUCE -> vai concatenar/somar as posições do array

// código 4
function join(array) {
    str = array.shift() + array.shift() + array.shift()
    console.log(str)
}
join(['o','l','á']) // como é string concatena
join([2,4,6]) // como são todos números, soma!