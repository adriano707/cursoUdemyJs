const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Santana',
    idade: 32,
    endereco: {
        cidade: 'Salvador',
        bairro: 'São cristovão',
        rua: 'São mateus',
        numero: 71    
    },
};
const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);

//const {endereco: {cidade, bairro}} = pessoa;
//console.log(cidade, bairro);