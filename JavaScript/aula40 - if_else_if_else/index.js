const date = new Date();
const hora = date.getHours();

if (hora >= 0 && hora <= 11) {
    console.log(`${hora}H - USUÁRIO DIZ: Bom Dia!`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`${hora}H - USUÁRIO DIZ: Boa Tarde!`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`${hora}H - USUÁRIO DIZ: Boa Noite!`);
} else {
    console.log('Olá');
}