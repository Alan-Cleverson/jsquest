'use strict'
// serve para nao vazar o this para dentro do escopo


// console.log(this)
// console.log(window === this)

// this.name = 'ricardo'
// function saudar() {
//     console.log('this no contexto da funcao ', this)
//     console.log('ola '+ this.name)
// }
// saudar()


// let usuario = {
//     nome: 'ricardo',
//     ola: function () {
//         console.log('this no contexto do metodo', this)
        
//         console.log('this.nome no contexto do metodo ', this.nome)
//     }
// }
// usuario.ola()

let comida = {
    nome: 'brocolis',
    temperatura: 0, 
   
}

comida.cozinhar = function(temperaturadecozimento) {
    console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturadecozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)