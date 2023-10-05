/**Trabalho Truma FS-22 Digital Colleger - Methods
 * Objetivo do trabalho e escolher 3 Methdos e explicalos e exemplificalo-los.
 * Methods que não podemos usar:
 *  - Push, pop, shift, unshift, map, foreach e concat.
 * Methods escolhidos para o trabalho.
 *  - Find, Filter e FindIndex
 */

// Primeiro comecamos com a declarar um Array de Objetos para usarmos os Methods.

const dados = [
    {nome: "Samuel", idade: 33, salario: 7800, area: "Centro de Controle"},
    {nome: "Alexandre", idade: 37, salario: 10800, area: "Centro de Controle Senior"},
    {nome: "Dayane", idade: 31, salario: 13500, area: "Coordenadora de O&M"},
    {nome: "Lucas", idade: 32, salario: 9000, area: "Analista de Pré e Pós Operação"},
]

/** 1 Methods e o FIND.
 *  A funcao do Find e percorre a lista de objetos e quando ele encontrar o PRIMEIRO que satisfaca a condicao imposta ele vai 
 *  pegar e retorna ele.
 */

// EX:
const exFind = dados.find((salary) => {
    return salary.salario >= 8000;
})
// Imprmindo o resultado. No caso ele vai percorrer o ARRAY e Trazer APENAS o PIRMEIRO iten que está dentro da Condicao >=8000
console.log(exFind); // Neste caso ele me retorna o Alexandre pois ele e o primeiro que atende a condicao >= 8000.

/** 2 Methods e o FILTER.
 *  O Method do Filter ele vai percorer o array de objetos e retornar um array com todos os objetos que atedem a condicao especificada
 *  parecido com o Find a diferenca e que ele nao tras so o primeiro que encontra.
 */

//EX:
const exFilter = dados.filter((age) => {
    return age.idade <= 33;
})
// Neste caso com foi usar o Filter ele vai olhar todos os itens do Array e traxxer em outro array tudo que atende a condicao.
console.log(exFilter); // vai traze o samuel, dayane e lucas.

