/**
 * Array é um tipo de dado que permite guradar
 * mais de um valor na mesma variavel
 */

const frutas = ["Maçã", "Banana"];

// // Lenght é uma prpriedade que contabiliza a 
// // quantidade total de itens no array
// // console.log(frutas.length);

// // //Para acessar um item do array é necessaário
// // //colocar o index do mesmo entre colchetes
// // console.log(frutas[0]);

// // // Acessar o último elemento
// // console.log(frutas[frutas.length -1]);

// //methodos
// frutas.map((fruta, index) => {
//     return console.log(fruta, index);
// })


// Push, pop, unshift, shift

//PUSH
// console.log(frutas);
//Envia o valor informado par ao final do array
// frutas.push("Abacaxi");
// console.log(frutas);

//POP
//Deleta o ultimo valor do array
// frutas.pop();
// console.log(frutas);

//SHIFT
//Remove o primeiro valor do array
// frutas.shift();
// console.log(frutas);

//UNSHIFT
//Adiciona um valor a primira posicao do array
// frutas.unshift("Macaco");
// console.log(frutas);