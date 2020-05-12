 //atribuição via desestruturação.

 /*
 let a = 'A';
 let b = 'B';
 let c = 'C';

 const valor = [b, c, a];
 [a, b, c] = valor;

 console.log(a, b, c);
 */

 //... resto do array, 
 const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const [um, ,tres, ,cinco, ,sete] = numero;

 console.log(um, tres, cinco);
 