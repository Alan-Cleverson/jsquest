let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise ((resolve, reject) => {
        if ( typeof chaleiraEstaNoFogao != 'boolean') throw 'somente e aceito valor booleano'
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 foi finalizado: café foi passado')
            resolve(true)
        } else {
            console.log('É necessario colocar a chaleira com a agua e ligar o fogao senão seu cafezinho nunca  vai ficar pronto')
            reject()
        }
    })
    }
    
    let passarOCafe = (aguaFervida) => {
        return new Promise((resolve) => {
            console.log('passo 2 finalizado: café foi passado')
            resolve(true)
        })
    }
    
    let tomarCafe = (cafePassado) => {
        return new Promise((resolve) => {
            console.log('passo 3 finalizado: terminei de tpmar o cafe')
            resolve(true)
        })
    }
    
    let lavarXicara = (cafeTomado) => {
        return new Promise((resolve) => {
            console.log('passo 4 finalizado: terminei de lavar a xicara')
            resolve(true)
        })
    }
    
    let chaleiraEstaNoFogao = 'teste'
    let fogaoEstaLigado = true
    
    // ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    // .then(() => {
    // return passarOCafe();
    // })
    // .then(() => {
    //     return tomarCafe();
    // })
    // .then(() => {
    //     return lavarXicara();
    // })
    // .then(() => {
    //     console.log('Finalizado o ritual do café, bora trabalhar');
    // });

    async function iniciarProcessoDeFazerCafe(){
        try{
            const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
            const cafePassado = await passarOCafe(aguaFervida)
            const cafeTomado = await tomarCafe(cafePassado)
            const xicaraLavada = await lavarXicara(cafeTomado)
            // if (xicaraLavada) 
        } catch(erro){
            console.log(erro)
        } finally {
            console.log('Finalizado o ritual de tomar o café, bora trabalhar')
        }
    }

    iniciarProcessoDeFazerCafe()

    // Aprendi sobre try, catch, finally e throw.