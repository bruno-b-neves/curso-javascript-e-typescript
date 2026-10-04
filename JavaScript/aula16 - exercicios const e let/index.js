const nome = "Bruno";
const sobrenome = "Neves";
const idade = 30;
const peso = 87;
const alturaEmM = 1.7;

let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
// anoNascimento = new Date().getFullYear() - idade - 1;
anoNascimento = 2026 - idade;

console.log(nome + " " + sobrenome + " tem", idade + " " + "anos" + " e pesa " + peso + "kg");
console.log(`tem ${alturaEmM.toFixed(2)}m e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento - 1}.`);
