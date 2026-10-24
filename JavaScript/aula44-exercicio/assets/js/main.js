// Capturar evento de submit do formulário

function submitForm() {
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector("#peso");
        const inputAltura = e.target.querySelector("#altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value)

        if (!peso) {
            setResultado('Peso Inválido', false) 
            return;
        }

        if (!altura) {
            setResultado('Altura Inválida', false) 
            return;
        }

        const imc = getImc(peso, altura);
        const tabelaImc = getTabelaImc(imc);
        
        const msg = `Seu IMC é: ${imc} (${tabelaImc.texto}).`;

        setResultado(msg, true, tabelaImc.classe);
    });
};

function getTabelaImc (imc) {
    const tabela = [
        { texto: 'Abaixo do Peso', classe: 'abaixo-peso' },
        { texto: 'Peso Normal', classe: 'peso-normal' },
        { texto: 'Sobrepeso', classe: 'sobrepeso' },
        { texto: 'Obesidade Grau 1', classe: 'obesidade-1' },
        { texto: 'Obesidade Grau 2', classe: 'obesidade-2' },
        { texto: 'Obesidade Grau 3', classe: 'obesidade-3' }
    ];
    
    if (imc >= 39.9) return tabela[5];
    if (imc >= 34.9) return tabela[4];
    if (imc >= 29.9) return tabela[3];
    if (imc >= 24.9) return tabela[2];
    if (imc >= 18.5) return tabela[1];
    if (imc < 18.5) return tabela[0];

};

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return Number(imc.toFixed(2));
}

function criaP () {
    let p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid, classeCor) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    
    let p = criaP();
    let imc = getImc()
    
    if (isValid) {
        p.classList.add(classeCor)
    } else {
         p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
};

submitForm();