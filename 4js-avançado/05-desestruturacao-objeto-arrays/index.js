let pessoa = {nome: 'Roberto', sobrenome: 'Dias', idade: 33}
// let nome = pessoa.nome
// let idade = pessoa.idade

// console.log(nome)
// console.log(idade)


let { nome, idade, sobrenome} = pessoa

console.log(nome)
console.log(idade)

const numeros = [ 1, 2, 3];

const [um, dois, três] = numeros

console.log(um)
console.log(dois)