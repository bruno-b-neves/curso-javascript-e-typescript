const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Neves',
    idade: 30,

    fala() {
        console.log(`A minha idade é: ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()