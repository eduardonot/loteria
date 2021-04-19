var loteria = require('./Loteria')
// JOGO LOTERIA
// AO IMPORTAR, DEVE PASSAR 3 PARAMETROS
// PRIMEIRO: 0 - LOTOFACIL ou 1 - MEGA-SENA
// SEGUNDO: QUANTIDADE DE JOGOS A SEREM GERADOS
// TERCEIRO: QUANTIDADE DE NUMEROS QUE SERAO SORTEADOS

const jogar = new loteria
console.log(jogar.setGames(0, 10, 15))
console.log(jogar.setGames(1, 5, 6))
console.log(jogar.getLog())