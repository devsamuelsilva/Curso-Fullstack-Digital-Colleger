/**
 * element.getAttribute(attributeName); -> retorna o valor do atributo
 * element.setAttribute(attributeName, value); -> configura um novo valor pro atributo
 * elemento.removeAttribute(attributeName);
 */

const container = document.getElementById('container');
const p = document.createElement("p");
container.appendChild(p);
p.innerText = 'Texto';

p.setAttribute("class", "texto"); // -> class="texto"
p.setAttribute("id", "paragrafo"); // -> id="paragrafo"

console.log(p.getAttribute("class")); //-> vai receber o valor do atributo class
console.log(p.getAttribute("id")); // -> vai receber o valor do atributo id

p.removeAttribute("id"); //-> removo o atributo pedido.