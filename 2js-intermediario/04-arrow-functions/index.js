// // Arrow Function
// let resultadoDaSoma = (numero1, numero2) => {
//     return numero1 + numero2
// }

// console.log(resultadoDaSoma(12, 5))
// //
// podemos simplificar da seguinte maneira...

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2


console.log(resultadoDaSoma(12, 5))

// outro exemplo...

const incentivarQuester = nomeQuester => {
    console.log('Parabéns '+ nomeQuester +', você chegou ao modulo de JS intermediário')
}

incentivarQuester('Roberto')