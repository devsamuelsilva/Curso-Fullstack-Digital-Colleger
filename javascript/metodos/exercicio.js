// EXECERCICIOS:

// 01 - Dobrar Números: Crie uma função que recebe um array de números e retorna um novo array onde cada número é dobrado.


// let ex1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/** 
ex1.map ((dobra, index) => {
    result = dobra * 2;
    console.log(result);
})
*/

// 02 - Converter Temperaturas: Escreva uma função que recebe um array de temperaturas em graus Celsius e retorna um novo array com as temperaturas equivalentes em Fahrenheit.

// const temp = [1, 222, 344, 455, 566, -2326, 423347, 128, 9, 10];
/** 
temp.map ((fahre, index) =>{
    tempFahre = ((fahre * 1.8) +32);
    console.log(tempFahre);
})
*/

// 03 - Calcular Quadrados: Escreva uma função que recebe um array de números e retorna um novo array onde cada número é elevado ao quadrado.

// const quadrados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// quadrados.map((elevado) => {
//     elev = (elevado * elevado);
//     console.log(elev);
// })

// 04 - Filtrar Números Pares: Escreva uma função que recebe um array de números e retorna um novo array contendo apenas os números pares.

// const par = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// par.map((pares) => {

//     if (pares % 2 === 0) {
//         const numPar = pares;
//         console.log(numPar);
//     }
// })

// 05 - Calcular Comprimento de Strings: Escreva uma função que recebe um array de strings e retorna um novo array com o comprimento de cada string.

// const comprimento = ["Samuel", "Simily", "Luiz", "Uênia"];

// comprimento.map ((comp) => {

//     compString = comp.length;
//     console.log(compString);
// })

// agora fazendo retornar um novo array ao inves de so imprimir

//01
// function doubleNumbers(arr){
//     const  double = arr.map((value) => value * 2);
//     return double;
// }
// console.log(doubleNumbers(ex1));

//02
// function celciusToFahrenheit(arr) {
//     const fahrenheit = arr.map((temp) => {
//         const newTemp = (temp*1.8+32).toFixed(2);
//         return Number(newTemp)
//     })
//     return fahrenheit;
// }

// console.log(temp);

//03

// const quadrados = [321, 22, 3, 4, 54, 46, 75, 81, 92, 130];

// function returnQuadrados(arr) {
//     const elevados = arr.map((expoente) => {
//         const newNum = expoente * expoente;
//         return newNum
//     })
//     return elevados;
// }

// console.log(returnQuadrados(quadrados));

//04

// const par = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function numPares(arr) {
//     const newArr = [];
//     arr.map((parr) => {
//         if (parr % 2 ===0){
//             newArr.push(parr);
//         }
//     })
//     return newArr;
// }
// console.log(numPares(par));

//05

// const comprimento = ["Samuel", "Simily", "Luiz", "Uênia"];

// function tamanhoString(arr) {
//     const string = arr.map((xxx) => { return xxx.length})
//     return string;
// }
// console.log(tamanhoString(comprimento));


//Exercicio de reforço

// Calcular Áreas:
// Crie uma função que recebe um array de objetos, onde cada objeto possui as propriedades largura e altura, e retorna um novo array com as áreas correspondentes (largura * altura).

    // const objetos = [
    //     {altura: 13, largura: 12},
    //     {altura: 13, largura: 33},
    //     {altura: 10, largura: 02},
    //     {altura: 14, largura: 32},
    // ];

    // function infos(arr) {
    //     const areas = arr.map((medida) => {
    //        const resultArea = medida.altura * medida.largura;
    //        return resultArea;
    //     })
    //     return areas;
    // }

    // console.log(infos(objetos));

// Contagem de Vogais:
// Escreva uma função que recebe um array de palavras e retorna um novo array com a contagem de vogais em cada palavra.

    // const palavras = ["Samuel", "Simily", "Luiz", "Uenia"];
    // const vogais = ["a", "e", "i", "o", "u"];

    // function verificarVogais(arr) {
    //     const vogaisPalavras = arr.map((letra) => {
    //         if ()
    //     })
    // }


// Remover Elementos Nulos:
// Escreva uma função que recebe um array que pode conter valores nulos (null) e retorna um novo array sem os valores nulos.

//Filter

// const numeros = [1, 2, 5, 10, 22, 18, 77, 100, 920, 1235];

// const numPares = numeros.filter((number) => number % 2 === 0);
// console.log(numPares);

const convidado = document.getElementById('convidado');
const btnSend = document.getElementById('btnSend');
const list = document.getElementById('list');
const filter = document.getElementById('filter');

const convidados = [];

function renderList(array) {
    const result = (list.innerHTML = array.map((convidado) => {
        return `<li>${convidado}</li>`;
    })
    .join(""));

    return result;
}

function renderConvidados() {
    convidados.push(convidado.value);
    renderList(convidados);
    convidado.value = "";
}

function renderConvidadosFiltrados() {
    const convidadosFiltrados = convidados.filter((convidado) => 
    convidado.toLowerCase().includes(filter.value.toLowerCase())
    );
    renderList(convidadosFiltrados);
}

btnSend.addEventListener("click", renderConvidados);

filter.addEventListener("input", renderConvidadosFiltrados);


//PONDO PRA RODAR NO ENTER
// convidado.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         const item = document.createElement('li');
//         item.innerText = convidado.value;
//         list.appendChild(item);
//         convidados.push(convidado.value);
//         console.log(convidados);
//         convidado.value = "";
//     }
// })
