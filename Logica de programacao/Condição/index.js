// console.log("Primeiro Codigo");
// const nome = 'Samuel Silva';
// let idade = 33;
// console.log(nome,idade);
// nome = 'Lopes';
// idade = 27;

/**
 * Exercícios
 * Escreva um programa que verifique se um número é positivo, negativo ou zero.
 * Escreva um programa que determine se um número é par ou ímpar.
 * Escreva um programa que verifique se um ano é bissexto. 
   Um ano é bissexto se for divisível por 4, mas não por 100. 
   No entanto, anos divisíveis por 400 também são bissextos.
 * Escreva um programa que calcule o IMC (Índice de Massa Corporal) 
   de uma pessoa com base em seu peso e altura. 
   O programa deve exibir uma mensagem informando se a pessoa 
   está abaixo do peso, com peso normal, com sobrepeso ou obesa.
*/


// Escreva um programa que verifique se o numero e positivo ou nao.

let numero = 9;

if (Number(numero) === 0) {
    console.log('o numero e ZERO');
}
else if (Number(numero) > 0) {
    console.log('o numero e positivo');
}
else {
    console.log('O numero e negativo');
}

// Escreva um programa para saber se o numero e impar ou par
if (Number(numero) === 0) {
    console.log('o numero e ZERO');
}
else if (Number(numero) % 2 === 0) {
    console.log('Este numero e PAR');
}
else {
    console.log('Este numero e IMPAR');
}


//Escreva um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa com base em seu peso e altura. 

let peso = 77;
let altura = 1.64;
let resultado =(peso /(altura*altura)).toFixed(2);

if(resultado<17){
console.log('Voce esta Muito abaixo do peso',resultado);
}
else if(resultado >= 17 && resultado <= 18.49){
    console.log('Voce esta abaixo do peso', resultado);
}
else if(resultado >= 25 && resultado <= 29.99){
    console.log('Voce esta acima do peso', resultado);
}
else if(resultado >= 30 && resultado <= 34.99){
    console.log('Voce tem obesidade tipo I', resultado);
}
else if(resultado >= 35 && resultado <= 39.99){
    console.log('Voce tem obesidade tipo II(severa)', resultado);
}
else if(resultado > 40){
    console.log('Voce tem obesidade tipo III(Mórbida)', resultado);
}
else {
    console.log('Voce esta no seu peso Normal', resultado);
}


//Caucule se um ano e bissexto ou nao

let ano = 2000;

if(ano % 4 === 0 && ano % 100 != 0){
    console.log(ano, 'É um ano bissexto');
}
else if(ano % 400 ===0){
    console.log(ano, 'É um ano bissexto divisivel por 400');
}
else{
    console.log(ano, 'Não e um ano bissexto');
}

//Verificacao de um triangulo.

let l2 = 5;
let l3 = 5;
let l1 = 5;

if (l1<(l2+l3)){
    console.log('E possivel formar um triangulo.');
}
else if (l2<(l1+l3)){
    console.log('E possivel formar um triangulo.');
}
else if (l3<(l2+l1)){
    console.log('E possivel formar um triangulo.');
}
else {
    console.log('Nao e possivel formar um triangulo');
}

// Cauculo do desconto

let valor = (Number(prompt('Digite o valor do prduto.'))).toFixed(2);

if (valor > 100){
    valor = Math.abs((valor * (10/100)) - valor); // o Meth.abs imprimi o valor sempre positivo(absoluto.)
    console.log('Este e seu valor com desconto = '+ valor);
}

else{
    console.log('Para este valor nao se aplica desconto');
}