function criamultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

// variavel que receba a função criaMutiplicador com o valor dentro do parametro a ser multiplicado(n * 2).
const duplica = criamultiplicador(2);
// (n * 3).
const triplica = criamultiplicador(3);
// (n * 4).
const quadriplica = criamultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));