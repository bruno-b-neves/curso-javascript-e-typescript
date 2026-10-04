/**
 * ?Aritméticos
 * todo (+ Adição / Concatenação (unir valores))
 * todo (- Subtração)
 * todo (* Multiplicação)
 * todo (/ Divisão)
 * todo (% Resto da Divisão)
 * todo (** Exponenciação/Potenciação)
 *
 * ? Ordem de Precedência
 * ! 1º. () - Parênteses
 * ! 2º. ** - Exponenciação/Potenciação
 * ! 3º. *, /, % - Multiplicação, Divisão e Resto
 * ! 4º. -, + - Subtração e Soma
 * ! 5º. =, +=, -=, *=, /=, %=, **= - Operandos de Atribuição
 */

const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 * num2) / num3);

/**
 * ?Atribuição
 * todo (= Atribuição)
 * todo (+= Soma e Atribui)
 * todo (-= Subtrai e Atribui)
 * todo (*= Multiplica e Atribui)
 * todo (/= Divide e Atribui)
 * todo (%= Resto da Divisão e Atribui)
 * todo (**= Exponenciação/Potenciação e Atribui)
 *
 * ? Ordem de Precedência
 * ! Todos tem a mesma precedência, caso haja várias atribuições na mesma expressão
 * ! a avaliação ocorre da direita para a esquerda
 */

let num4 = 10;
let num5 = (num4 += num4);
let num6 = (num5 -= num4 *= num5);
let num7 = (num4 **= num5 /= num4);

console.log("Variável: num4", num4.toExponential(2));
console.log("Variável: num5", num5.toFixed(2));
console.log("Variável: num6", num6.toString());
console.log("Variável: num7", num7.toExponential(2));

/**
 * ? Incremento
 * todo ++ Incremento
 * todo -- Decremento
 */

let contador = 1;
contador++;
console.log(contador);
