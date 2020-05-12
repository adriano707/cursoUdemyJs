 // return
 // Retorna um valor
 // Termina a função 

 function falaFrase(comeco) {
     function falaResto(resto){
         return comeco + ' ' + resto;
     }
     return falaResto;
 }

 const fala = falaFrase('Olá');
 const resto = fala('Mundo!');
 console.log(resto);