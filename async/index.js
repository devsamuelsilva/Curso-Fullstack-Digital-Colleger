/**
 * Methodos HTTP
 * GET - Buscar
 * POST - Enviar
 * DELETE - Deletar
 * PATCH - Subsstituir Parcialmente
 * PUT - Substituir completamente
 * 
 * Códigos HTTP
 * 200 ~ 299 - Sucesso
 * 300 ~ 399 - Redirecionamento
 * 400 ~ 499 - Error do Cliente
 * 500 ~ 599 - Error do Servidor
 */

// const nome = "Miriam";
// const saudacao = `Olá, meu nome é ${nome}!`;
// console.log(nome);
// const result = fetch("https://fakestoreapi.com/products")
// .then((res) => res.json())
// .then((json) => json);

/**
 * Criar uma funcao que ao clicar no btnList
 * ele vai renderizar(mostra) a lista de produtos
 * Mostrar apenas o nome
 */

const list = document.getElementById("list");
const btnList = document.getElementById("btnList");

async function getProducts () {
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json();
    return data;
}
function creatListItem(nome) {
const html = (list.innerHTML += `<li>${nome}</li>`);
return html;
}

async function renderList () {
    const products = await getProducts();
    list.innerHTML = "";
    products.map ((product) => {
        const data = creatListItem(product.title);
        return data;
    })
}

btnList.addEventListener("click", renderList);

getProducts();
