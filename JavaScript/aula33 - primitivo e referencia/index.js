/** 
* ! Primitivos - string, number, boolean, undefined, 
* ! null (bigint, symbol) - Valores Copiados
* 
* ? Referência (mutável) - array, object, function - Passados por referência
 */

const a = {
  nome: 'Bruno',
  sobrenome: 'Neves'
};
const b = a;

b.nome = 'Bruno';
console.log(a);
console.log(b);