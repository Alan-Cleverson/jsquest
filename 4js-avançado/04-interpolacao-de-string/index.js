// const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
//     return "primeiro Nome: " + primeiroNome + ", ultimo Nome: " + ultimoNome+ ", Idade: " + idade;
// }

// console.log(imprimirInformacoesPessoas("Roberto", "Dias", 33));

const imprimirInformacoesPessoas = (primeiroNome, ultimoNome, idade) => {
        return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade}`;
    }
    
    // console.log(imprimirInformacoesPessoas("Roberto", "Dias", 33));

    // interpolação de strings abaixo
    console.log(`${imprimirInformacoesPessoas("Roberto", "Dias", 33)}, ele é um dev quester.`)

    console.log(`Soma ${10 + 20}`)

