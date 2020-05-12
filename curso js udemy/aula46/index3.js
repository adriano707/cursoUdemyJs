// Atribuição via desestruturação.

function funcao2({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}
funcao2({nome: 'Adriano', sobrenome: 'Santana', idade: 32});
 
function funcao3([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
funcao3(['Adriano', 'Santana', 32]);
