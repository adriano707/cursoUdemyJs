// Closures

function retornaFuncao(nome){ 
    return function(){
        return nome;
    }
}
const funcao = retornaFuncao('Adriano');
const funcao2 = retornaFuncao('Santana')
console.dir(funcao);
console.dir(funcao2);