const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

/* CONCATENAR DOIS ARREYS */
//----------------------------------------------------

// let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João', 'Paulo']

// // pessoas1 = pessoas1.cancat(pessoas2)

// pessoas1 = [...pessoas1, ...pessoas2]

// console.log(pessoas1)
//--------------------------------------------


const pessoa1 = {nome: 'Roberto', idade: 33}

const objetoClone = {...pessoa1}

console.log(pessoa1)
console.log(objetoClone)