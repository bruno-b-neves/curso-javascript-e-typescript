const nome = prompt("Digite seu nome completo:");
document.body.innerHTML += `O meu nome é: <strong>${nome}</strong>.<br/>`;
document.body.innerHTML += `Meu nome tem <strong>${nome.length}</strong> letras.<br/>`;
document.body.innerHTML += `
    A segunda letra do meu nome é: 
    <string>${nome[1]}</strong>.<br />
`;
document.body.innerHTML += `
    Qual o primeiro índice da letra "o" do meu nome?  
    <strong>${nome.indexOf("o")}</strong>. <br />
`;
document.body.innerHTML += `
    Qual o último índice da letra "o" do meu nome? 
    <strong>${nome.lastIndexOf("o")}</strong> <br />
`;
document.body.innerHTML += `
    As últimas 3 letras do meu nome são: 
    <strong>${nome.slice(-3, nome.length)}</strong>. <br />
`;
document.body.innerHTML += `
    As palavras do meu nome são: 
    <strong>${nome.split(" ")}</strong>. <br />
`;
document.body.innerHTML += `
    Meu nome com letras maiúsculas: 
    <strong>${nome.toUpperCase()}</strong>. <br />
`;
document.body.innerHTML += `
    Meu nome com letras minúsculas: 
    <strong>${nome.toLowerCase()}</strong>.
`;
