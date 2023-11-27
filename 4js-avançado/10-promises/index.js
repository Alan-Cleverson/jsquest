

let ferverAgua = (chaleiraEstaNoFogo, fogoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogo && fogoEstaLigado){
            console.log('comecando o processo de ferver água')
            resolve()
        } else {
            console.log('é necessário ligar o fogão e colocar a chaleira no fogo para ferver a água')
            reject()
        }
    })
}

let chaleiraNoFogo = true
let fogoEstaLigado = true
ferverAgua(chaleiraNoFogo, fogoEstaLigado)
console.log('fazendo café')