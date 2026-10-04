// ECMAScript é uma padronização da linguagem JS
// String, number, undefined, null, boolean
// Não criar variáveis sem LET ou CONST

const nome = "Bruno"; // string
console.log(`A constante nome é do tipo ${typeof nome}`);
const nome1 = "Felipe"; // string
console.log(`A constante nome1 também é do tipo ${typeof nome1}`);
const nome2 = "Erick"; // string
console.log(`A constante nome2 também é do tipo ${typeof nome2}`);

const num1 = 10; // number
console.log(`A constante num1 é do tipo ${typeof num1}`);
const num2 = 10.52; // number
console.log(`A constante num2 também é do tipo ${typeof num2}`);

let nomeAluno; // undefined -> não aponta pra local nenhum na memória
console.log(`A variável nomeAluno é do tipo ${typeof nomeAluno}`);
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
console.log(`A constante sobrenomeAluno é do tipo ${typeof sobrenomeAluno}`);

const aprovado = false; // Boolean = true, false (lógico)
console.log(`A constante aprovado é do tipo ${typeof aprovado}`);

let a = 2; // dado primitivo
const b = a; // passagem por valor
console.log(a, b); // 2, 2

a = 3;

const c = { nome: "Bruno" }; // objeto
const d = c; // mesma referência

d.nome = "Felipe";

console.log(c.nome);
console.log(d.nome);
