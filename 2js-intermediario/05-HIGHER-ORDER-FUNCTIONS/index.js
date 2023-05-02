// calculando ano de nascimento
// const calcularAnoNascimento = function (idade, mesNascimento, imprimir){
//     const mesAtual = 4
//     let anoNascimento = 2023 - idade
//     if (mesNascimento > mesAtual) anoNascimento --
//     imprimir(anoNascimento)
// }

// let imprimirAnoNascimento = anoNascimento => {
//     console.log('seu ano de nascimento é: '+ anoNascimento)
// }

// calcularAnoNascimento(28, 1, imprimirAnoNascimento)

function multiplicar(multiplicador){

    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quadruplicar(3))