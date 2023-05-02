let frutas = ['banana', 'maca', 'laranja', 'uva']
// let frutasExtraidas = frutas.slice(1,3)

// console.log(frutasExtraidas)
// console.log(frutas)

let frutasExtraidas = frutas.splice(1,2)

console.log(frutasExtraidas)
console.log(frutas)
// o splice remove do arrey frutas e o slice so remove no frutasextraidas

let removeEAdiciona = frutas.splice(1,2, 'goiaba', 'abacaxi','pera')
console.log(frutas)
// com splice da para remover e adicionar elementos