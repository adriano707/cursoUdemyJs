// Funções construtoras.
function Pessoa(nome, sobrenome) {
//  Pessoa.nome = nome    
    this.nome = nome;
//  Pessoa.sobrenome = sobrenome
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Adriano', 'Santana');
const p2 = new Pessoa('Tamilis', 'Santana');
p1.metodo();

console.log(p2.nome, p1.sobrenome);