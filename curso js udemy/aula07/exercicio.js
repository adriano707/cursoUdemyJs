
/*
Adriano Santana tem 32 anos, pesa 67.8 kg
tem 1.68 dealyura e seu IMC é de 
Adriano Santana nasceu em
*/
const nome = 'Adriano';
const sobrenome = 'Santana';
const idade = 32;
const peso = 67.8;
const altura = 1.68;
let imc;
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)