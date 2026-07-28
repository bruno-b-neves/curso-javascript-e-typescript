let nomeUsuario;
let idadeUsuario;
let pesoUsuario;
let alturaUsuario;

nomeUsuario = "Bruno Neves";
idadeUsuario = 30;
pesoUsuario = 87;
alturaUsuario = 1.7;

const multiplicaAlturaXAltura = alturaUsuario * alturaUsuario;
const dividePesoTotal = pesoUsuario / multiplicaAlturaXAltura;
const imcUsuario = dividePesoTotal;

console.log(
    nomeUsuario,
    "tem",
    idadeUsuario,
    "anos,",
    "pesa",
    pesoUsuario,
    "kg",
    "tem",
    alturaUsuario,
    "de altura",
    "e seu IMC é de",
    imcUsuario,
);
