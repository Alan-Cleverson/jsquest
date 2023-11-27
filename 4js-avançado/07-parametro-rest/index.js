// function( a, b, ...args) {

// }

function incentivarQuest(mensagem, ...nomesQuesters){
    // console.log(`${mensagem} ${nomesQuesters}`)
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuest('Parabens por ter chegado ao modulo de javaScript avançado,', 'Joao', 'Pedro', 'Raphael')