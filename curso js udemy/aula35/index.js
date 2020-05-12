// For in - estruturas de repetição.

const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Santana',
    idade: 32
};

//console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


//for (let index in frutas) {
//    console.log(frutas[index])
//}