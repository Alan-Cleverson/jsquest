function colocarAguaParaFerver(){
    console.log('Colocar agua para ferver')

    setTimeout(() => {
        console.log('água ferveu')
        passarOCafe()
    },5000);
}

function prepararParaPassarOCafe(){
    console.log('Pegar o pó de café')
    console.log('plegar o filtro de cafe')
    console.log('colocar o cafe no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafe(){
    console.log('passando o cafe')
}

colocarAguaParaFerver()
prepararParaPassarOCafe()
