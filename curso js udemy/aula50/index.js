// Funções imediatas.

(function(idade, peso, altura) {

    const sobrenome = 'Adriano';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Santana'))
    }

    falaNome();
    console.log(idade, peso, altura);
})(32, 69, 1.69);
 