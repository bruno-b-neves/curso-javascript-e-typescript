// Não podemos criar constantes com palavras reservadas, ex: const if;
// Constante precisam ter nomes significativos, ex: const gravarUsuario;
// Não pode começar o nome de uma constante com um número, ex: const 1nome;
// Não podem conter espaços ou traços, ex: const nome usuario; ou const nome-usuario
// Utilizamos camelCase, ex: const nomeCompleto;
// Case-sensitive,
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);
