/**
 * Selecionar Elementos no JavaScript
 *  - document.getElementById(id do elemento'); -> retorna 1 elemento apenas
 *  - document.getElementByClassName('nome do elemento'); -> retorna os elementos que possuem a classe
 *  - document.getElementBytagName('nome da tag'); -> retorna os elementos que possuem a tag
 *  - document.querySelector('quary de busca'); -> retorna apenas o primero que ele encontrar
 *  - document.querySelectorAll('query da busca'); ->retorna todos os elementos da tag ou id ou classe pedida.
 *  - .innerText -> retorna o texto / valor do nosso elemento escreve o texto proprimente dito
 *  - .innerHtml -> retorna o HTML do nosso elemento escreve HTML
 *  - para quebrar a linha dentro da funcao pode usar a crase(`)
 */

const texto = document.getElementById('text');
// console.log(document.querySelectorAll('#text'));
texto.innerText = "texto Novo"


/**
 * Criar uma funcao que ao inciar o site
 * retorne na div container uma lista de 1 ate 5 ol
 * - document.getElementById para puxar o elemento
 * - funcao
 * - chamar a funcao ->nomeFuncao()
 * - .innerHtml -> criar uma ol com 5 li
 */

const modfHtml = document.getElementById('container') // puxamos o elemento nomeando ele como modfHtml

// Funcao Criada
function htmlModif() {
    modfHtml.innerHTML = `
    <ol>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </ol>
    `;
}
htmlModif();