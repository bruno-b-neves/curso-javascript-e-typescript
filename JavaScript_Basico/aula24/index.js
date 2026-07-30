// todo Strings são iteraveis
// * "\" usado para escapar o caractere \"texto\"
let umaString = "Um 'texto'";

// * Para ter uma \ utilizasse \\texto
umaString = "Um \\texto";
console.log(umaString);

umaString = "Um texto.";

// * O caractere da String pode ser acessado pelo seu indice
console.log(umaString[3]);

// * charAt() - Retorna o caractere no índice especificado.
console.log(umaString.charAt(3));

// * concat() - Retorna uma string que contém a concatenação de duas ou mais strings.
console.log(umaString.concat(" em", " um", " lindo dia."));

// * indexOf() - Retorna a posição da primeira ocorrência de uma subcadeia, ou -1 se ela não estiver presente.
console.log(umaString.indexOf("o", 3));

// * lastIndexOf() - Retorna a última ocorrência de uma subcadeia na cadeia de caracteres, ou -1 se ela não estiver presente.
console.log(umaString.lastIndexOf("m", 3));

// * match() - Corresponde a uma string ou a um objeto que suporte a operação de correspondência e retorna um array contendo os resultados dessa busca, ou `null` caso nenhuma correspondência seja encontrada.
console.log(umaString.match(/[a-z]/g));

// * search() - Encontra a primeira correspondência de subcadeia em uma busca por expressão regular.
console.log(umaString.search(/[a-z]/g));

// * replace() - Substitui texto em uma string, usando uma expressão regular ou uma string de busca.
console.log(umaString.replace("Um", "Outro"));

// * length - Retorna o comprimento de um objeto String.
console.log(umaString.length);

// * slice() || substring() - Retorna uma parte de uma string.
console.log(umaString.slice(4, 6));
console.log(umaString.substring(umaString.length - 6, umaString.length - 1));

// * split() - Divida uma string em substrings usando o separador especificado e retorne-as como um array.
console.log(umaString.split(" "));

// * toUppercase() - Converte todos os caracteres alfabéticos de uma string para maiúsculas.
console.log(umaString.toUpperCase());

// * toLowercase() - Converte todos os caracteres alfabéticos de uma string para minúsculas.
console.log(umaString.toLowerCase());
