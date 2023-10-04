const btnBlue = document.getElementById("btnBlue");
const btnBlack = document.getElementById("btnBlack");
const btnOpenModal = document.getElementById("openModal");
const btnCloseModal = document.getElementById("closeModal");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const modal = document.getElementById("modal");

function changeBgColerToBlue() {
    container1.classList.toggle("bgBlue");
}

function changeBgColerToBlack() {
    container2.classList.toggle("bgBlack");
}

function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("show");
}

modal.addEventListener('click', closeModal);
btnBlue.addEventListener('click', changeBgColerToBlue);
btnBlack.addEventListener('click', changeBgColerToBlack);
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

/**
 * 2 inputs
 * 1 botao
 * 1 div para apesentar o resultado
 * pagar o valor dos inputs -> como receber o valor de um input do JS
 * multiplicar os valores ao clicar no botao -> funcao
 * apresentar os valores em uma div
 */

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const btnCalc = document.getElementById("btnCalc");
const result = document.getElementById("resultado");

function sum(v1, v2) {
    return v1 * v2;
}

function showResult(resultado) {
    const finalResult = (result.innerText = resultado);
    return finalResult;
}

btnCalc.addEventListener("click", () => {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    const total = sum(value1, value2);
    return showResult(total);
});
