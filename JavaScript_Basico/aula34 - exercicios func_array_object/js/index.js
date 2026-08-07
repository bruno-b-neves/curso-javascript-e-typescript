function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    const recebeEventoForm = (evento) => {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const objetoPessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        pessoas.push(objetoPessoa)

        resultado.innerHTML += 
            `<p>Nome Completo: ${nome.value} ${sobrenome.value} | 
            Peso: ${peso.value}kg | 
            Altura: ${altura.value}m</p>
        `
        console.log(pessoas)
    }

    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();