// * (condição)  ? 'valor verdadeiro' : 'valor falso'

const pontuacao = 1000;
const nivel = pontuacao >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'

console.log(nivel, corPadrao)