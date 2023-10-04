// Funcoes nomeadas, Arrow function e Anonimas.

// function somar () {
//     console.log(5+5, 'Nomeadas');
// }

// const somarArrow = () => {
//     console.log(5+5, 'Arrow');
// }

// const somarAnonimo = function (){
//     console.log(5+5, 'Anonimo');
// }

// somar();
// somarArrow ();
// somarAnonimo();

// Parametros

/*
function somarNumeroFora (a, b){
    console.log(a+b, 'Parametro');
}

function somarNumeroFora (a, b){
    console.log(a+b, 'Parametro');
}
*/


// * Contagem de vogais: Escreva uma função que conte o número de vogais
// * em uma string e retorne o resultado.
// * - Recebe uma string por parâmetro
// * - Contar o número de vogais presentes
// * - For
// * - Console.log na quantidade de vogais existentes

const aluno = 'Samuel Silva';
const vogais = ['a', 'e', 'i', 'o', 'u'];

const contarVogais = function (nome) {
    let total = 0;
    for (let i = 0; i < nome.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if (nome[i] === vogais[j]) {
                total += 1;
            }
        }
    }
    console.log(total);
}

// contarVogais(aluno);

// * Média de notas: Crie uma função que aceite uma matriz/lista(array) 
//  * de notas e calcule a média das notas usando um loop for of.
//  * - Recebe um array como parâmetro
//  * - 10 notas
//  * - Média das 10 notas
//  * - For of
//  * - Console.log na média

const notasAluno = [8, 9, 10, 5, 1, 4, 6, 4, 7, 9]

const mediaNotas = function (notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota
    }
    const media = soma / notas.length
    console.log(media);
}
// mediaNotas(notasAluno);

// * Propriedades do objeto: Escreva uma função que aceite um objeto 
//  * como argumento e use um loop for in para listar todas as 
//  * propriedades e seus valores.
//  * - Recebe um objeto como parâmetro
//  * - Objeto vai ter nome, idade e email
//  * - Console.log em todas as propriedades de cada objeto
//  * - For in

const infosAluno = [
    {
        nome: 'Samuel Silva',
        idade: 33,
        curso: 'FullStack',
        email: 'devsamuelsilva@gmail.com'
    },
    {
        nome: 'Samuel',
        idade: 33,
        curso: 'FullStack',
        email: 'devsamuelsilva@gmail.com'
    },
    {
        nome: 'Silva',
        idade: 33,
        curso: 'FullStack',
        email: 'devsamuelsilva@gmail.com'
    }

]

const objeto = function (infosObjeto) {
    for (let infos in infosObjeto) {
        console.log("infosObjeto." + infos + " = " + infosObjeto[infos].nome,infosObjeto[infos].idade, infosObjeto[infos].curso, infosObjeto[infos].email);
    }
}

// objeto(infosAluno);


// * Filtrar objetos: Crie uma função que aceite um objeto que contém 
// * informações de alunos (nome, idade, nota) e use um loop for in 
// * para filtrar e listar apenas os alunos que obtiveram uma nota 
// * superior a um determinado valor.
// * - Recebe um objeto
// * - Propriedades (nome, idade, nota)
// * - For in para o loop
// * - Console.log do nome, idade e a nota dos alunos com 
// *   nota maior que 7

const filtroAluno = [
    {
        nome: 'Samuel Silva',
        idade: 33,
        nota: 10,
    },
    {
        nome: 'Samuel',
        idade: 33,
        nota: 6,
    },
    {
        nome: 'Silva',
        idade: 33,
        nota: 7,
    }
]

function filtro(melhorAluno){
    
    for (const melhor in melhorAluno){

        if (melhorAluno[melhor].nota > 7){
            console.log("Aluno com a Nota mais alta e o " + melhorAluno[melhor].nome, melhorAluno[melhor].idade + "Anos", melhorAluno[melhor].nota);
        }
    }
}

// filtro(filtroAluno);

/**
 * Função - parâmetro (array de objetos)
 * Calcular o valor total de vendas realizado de todos os protudos juntos
 * Calcular o valor total por produto
 * console.log(Valor de venda mensal: R$ VALOR TOTAL de todos os produtos)
 * console.log(Valor de venda PRODUTO: R$ VALOR TOTAL por PRODUTO)
 */


const infoProdutos = [
    {
      id: 1,
      produto: "Computador",
      quantidade: 15,
      valor: 2900,
    },
    {
      id: 2,
      produto: "Monitor",
      quantidade: 10,
      valor: 400,
    },
    {
      id: 3,
      produto: "Cadeira",
      quantidade: 5,
      valor: 799,
    },
    {
      id: 4,
      produto: "Teclado",
      quantidade: 19,
      valor: 130,
    },
    {
      id: 5,
      produto: "Mouse",
      quantidade: 30,
      valor: 70,
    },
  ];

function loja(infoProdutos){
    let valorTotal = 0;
    let totalItem = 0;
    for(let index in infoProdutos){
        const dinheiro = infoProdutos[index].valor;
        const numeros = infoProdutos[index].quantidade;
        valorTotal += (dinheiro * numeros);
        totalItem += (dinheiro * numeros);

        console.log(`Valor de venda ${infoProdutos[index].produto}: R$ ${dinheiro * numeros} por PRODUTO`);
    }

    console.log(`Valor de venda mensal: R$ ${valorTotal} de todos os produtos`);
  }

  loja(infoProdutos);