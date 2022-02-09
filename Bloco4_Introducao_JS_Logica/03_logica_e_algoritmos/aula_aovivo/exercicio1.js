// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let num = [];

for (let index = 0; index < 50; index += 1) {
    num[index] = index + 1;
}

let result = 0

for (let index = 0; index < num.length; index += 1) {
    result += num[index]
}
console.log(result);