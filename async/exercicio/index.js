const cep = document.getElementById("cep");
const btnsearch = document.getElementById("btnsearch");
const result = document.getElementById("result");

// imprimir a localidade e a uf na tela alterando o arquivo html.
function creatHtml(localidade, uf, bairro, logradouro, cep) {
    const html = (result.innerHTML = `
    <p>Cidade: ${localidade}</p>
    <p>Estado: ${uf}</p>
    <p>Logradouro: ${logradouro}</p>
    <p>Bairro: ${bairro}</p>
    <p>Cep: ${cep}</p>
    `);
    return html;
}

async function getAddress(cep) {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    console.log(data);
    return data;
}

async function renderAddress() {
    const address = await getAddress(cep.value);
    creatHtml(address.localidade, address.uf, address.logradouro, address.bairro, address.cep);
}

btnsearch.addEventListener("click", renderAddress);