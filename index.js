var loteria = require('./Loteria')
const jogar = new loteria
console.log(jogar.setGames(0, 10, 15))
console.log(jogar.setGames(1, 5, 6))
console.log(jogar.getLog())