// Para criar um array utilize [] (colchetes)
const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
// console.log(alunos)

// Array é indexado por elemento, o indice 0 retorna Luiz e o 
// indice 2 retorna João 
// console.log(alunos[0])
// console.log(alunos[2])


// alunos[0] = 'Bruno' // Altera alunos
// alunos[3] = 'Caroline' // Adiciona no fim alunos
// console.log(alunos)

// Para obter o tamanho do Array use o .length
// console.log(alunos.length)

// Para cadastrar dados no Array com .length
// alunos[alunos.length] = 'Felipe'
// alunos[alunos.length] = 'Erick'
// console.log(alunos)

// Adiciona novos elementos ao final de um array e retorna o novo comprimento do array.
// alunos.push('Gilson')
// alunos.push('Mirian')
// console.log(alunos)

// Insere novos elementos no início de um array e retorna o novo comprimento do array.
// alunos.unshift('Emily')
// alunos.unshift('Marcia')
// console.log(alunos)

// Remove o último elemento de um array e o retorna. 
// Se o array estiver vazio, `undefined` é retornado e o array não é modificado.
// let removido = alunos.pop()
// console.log(`\nO elemento removido é: ${removido}`)
// console.log(alunos)

// Remove o primeiro elemento de um array e o retorna. 
// Se o array estiver vazio, `undefined` é retornado e o array não é modificado.
// removido = alunos.shift()
// console.log(`O elemento removido é: ${removido}`)
// console.log(alunos)


// delete alunos[2] // deleta o elemento e não modifica o indice
// console.log(alunos)

// console.log(alunos[50]) // retorna undefined

// Retorna uma cópia de uma parte de um array. 
// Tanto para o início quanto para o fim, pode-se usar um índice 
// negativo para indicar um deslocamento a partir do final do array. 
// Por exemplo, -2 refere-se ao penúltimo elemento do array.
// alunos.push('Luiza')
// alunos.push('Eduardo')
// let fatiar = alunos.slice(0, -1)
// console.log(fatiar)

console.log(typeof alunos) // Retorna um Object, Array é um objeto
console.log(alunos instanceof Array) // Se true, é um array