/**
 * document.createElement -> Criar um elemento no documento
 * node.appendChild -> adicionar o elemento como ULTIMO no do pai
 * node.insertBefore -> inserir um elemento antes de outro elemento
 * node.removeChild -> temover um filho do elemento
 */

//Criando um elemento com uma tag P
// const p = document.createElement("p");

// recebe o elemento que tenha uma div chamada container
// const container = document.getElementById("container");

// adiciona o elemento p ao final do elemento container
// container.appendChild(p);

//adiciona o elemento p antes de um elemento especifico
// container.insertBefore(p, container.firstChild);

// remove um elemento especifico do nó
// container.removeChild(p)

/**
 * Criar 2 elementos
 * - h1
 * - p
 * Iserir primeiro o H1
 * Inserir o P abaixo do H1
 * Modifica o texto/Html de ambos elementos
 * excluir o primeiro o P depois o H1
 */

const primeiro = document.createElement("h1");
const segundo = document.createElement("p");

const container = document.getElementById("container");
container.appendChild(segundo);
container.insertBefore(primeiro, container.lastChild);
primeiro.innerHTML = "<h2>texto</h2>";
segundo.innerText = "texto2";
container.removeChild(segundo);
container.removeChild(primeiro);

