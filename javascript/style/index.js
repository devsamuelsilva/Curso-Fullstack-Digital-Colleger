/**
 * Adicionar uma class => 
    element.classList.add(className)
 * Remover uma class => 
    element.classList.remove(className)
 * Remove ou adiciona uma class => 
    element.classList.toggle(className)
 * Adiciona um valor a uma propriedade CSS
 * element.style.property = value
 * Ex: element.style.color = 'red'
 */

/** 
const container = document.getElementById('container');
const p = document.createElement('p');
container.appendChild(p);
p.innerText = "Texto aqui";

p.classList.add("hidden"); //-> adiciona uma classe
p.classList.remove("hidden");//-> remove uma classe
p.classList.add("show");

p.classList.toggle("show"); //-> muda a classe caso tenha ele retira e caso nao tenha ele coloca.
p.classList.toggle("hidden");

p.style.display = 'flex'; //-> adiciona style na linha
p.style.fontSize = '25px';
p.style.color = 'red';
*/

/** EXERCICIO:
 * Criar um elemento P e um elemento H1
 * Inserir o elemento na DIV
 * Adicionar um texto padrao: "Texto" e "Titulo"
 * criar duas classe uma para cada elemento
 * atribuir a classe aos elementos
 */

// Criar um elemento P e um elemento H1
const container = document.getElementById('container');
const titulo = document.createElement('h1');
const texto = document.createElement('p');

// Inserir o elemento na DIV
container.appendChild(titulo);
container.appendChild(texto);

//Adicionar um texto padrao: "Texto" e "Titulo"
titulo.innerText = "Titulo";
texto.innerText = "Texto";

// atribuir a classe aos elementos
titulo.classList.add("titulo");
texto.classList.add("texto");