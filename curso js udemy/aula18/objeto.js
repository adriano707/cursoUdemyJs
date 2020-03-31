/*
function criaPessoa (nome,  sobrenome, idade) {
    return{
        nome, sobrenome, idade 
    };
}

const pessoa1 = criaPessoa('Adriano', 'Santana', 32);
const pessoa2 = criaPessoa('Tamilis', 'Santana', 31);
const pessoa3 = criaPessoa('leila', 'Ribeiro', 28);
const pessoa4 = criaPessoa('Andre', 'Neto', 34);
const pessoa5 = criaPessoa('Jorge', 'Ferreira', 64);

console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: 'Adriano',
    sobrenome: 'Santana',
    idade: 32,

    fala (){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();