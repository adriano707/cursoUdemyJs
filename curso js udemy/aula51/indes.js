// Funções fábrica

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            console.log(valor);
        },
        fala: function(assunto) {
            return `${this.nome} está ${assunto}`;
        }, 
        altura: altura,
        peso: peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };   
}

const p1 = criaPessoa('Adriano', 'Santana', 1.7, 67);
p1.nomeCompleto = 'Tamilis da Silva dos Santos de Santana';
console.log('==========================================')
console.log(p1.nomeCompleto);
console.log(p1.imc());
