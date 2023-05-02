
// let jogo1 = {
//     nome: 'final fantasi'
// }

// let jogo2 = {
//     nome: 'fallout'
// }

// let videogame = {
//     nome: 'xbox',
//     valor: 3000,
//     jogos: [jogo1, jogo2]
// }

// let jogo3 = {
//     nome: 'fifa'
// }

// videogame.jogos.push(jogo3)

// console.log(videogame)


let cliente = {
    nome: 'ricardo',
    ultimoPedido: {
        produto: 'xbox',
        valor: 3000,
        jogos:[
            {nome: 'fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)