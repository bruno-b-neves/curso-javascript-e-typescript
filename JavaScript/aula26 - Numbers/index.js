let num1 = 10.25; // number
let num2 = 2.5; //number

// Transforma Number em String e Concatena
console.log(num1.toString() + num2);

num1 = num1.toString(); // converte Number para String

// converte Number para String para Binários, Decimais e Hexadecimais
num1 = 15;
console.log(num1.toString(2));

num1 = 15.12312412432;
console.log(num1.toFixed(2)); // Converte Number para 2 casas decimais

// Verifica se Number é Inteiro ou não com retorno booleano (true or false)
num1 = 10;
console.log(Number.isInteger(num1));

// Verifica se Number é um NaN ou não com retorno booleano (true or false)
let temp = num1 * "5";
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;

// Converte uma string em um número de ponto flutuante.
// num1 = parseFloat(num1.toFixed(2));

// Um objeto que representa um número de qualquer tipo.
// num1 = Number(num1.toFixed(2));

console.log(num1);

// Escala por 100 para reduzir erros de precisão
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8

console.log(num1);
console.log(Number.isInteger(num1));
