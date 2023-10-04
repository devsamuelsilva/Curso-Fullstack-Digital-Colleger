let arrNumber = [1,2,3,4,5,6,7,8,9,10];
let nome = 'Samuel';
let vogais = ['a','e','i','o','u'];

// Imprima os numeros de 1 a 5
let position = (Number(prompt('Digite a posição.')));
for(i=0;i<position;i++){
    console.log(i);
}

//Imprima os numeros Par dentro do Array
for(i=0;i<arrNumber.length;i++){
    if(arrNumber[i]%2===0){
        console.log(arrNumber[i]+' Par');
    }
}

//Imprima os numeros Impar dentro do Array
for(i=0;i<arrNumber.length;i++){
    if(arrNumber[i]%2!==0){
        console.log(arrNumber[i]+' impar');
    }
}

// Imprima as vogais de uma palavra.

for(i=0;i<nome.length;i++){
   for(j=0;j<vogais.length;j++){
    if(nome[i]===vogais[j]){
        console.log(nome[i]);
       }
   }
}