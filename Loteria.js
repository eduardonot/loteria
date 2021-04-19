class Loteria{
    constructor(occurrences, generated, errors, min, max, gameNumberRange, gameName){
    this.min = 0, this.max = 0, this.errors = 0, this.occurrences = 0,this.gameNumberRange = 0, this.generated = 0, this.gameName = ""
    }
    setGames(gameID, numGames, numMarks){
        this.occurrences ++
        switch(gameID){
            case 0:
                this.min = 15
                this.max = 20
                this.gameNumberRange = 25
                this.gameName = "Lotofácil"
                console.log(this.gameName)
                break
            case 1:
                this.min = 6
                this.max = 15
                this.gameNumberRange = 60
                this.gameName = "Mega-Sena"
                console.log(this.gameName)
                break
            default:
                this.errors ++
                return "Erro no primeiro parametro: Digite 0 ou 1!"
        }
        let result = []
        let indexPosition
        if (numMarks < this.min || numMarks > this.max || isNaN(numMarks)){
            this.errors ++
            return `Erro no terceiro parametro. Insira um valor entre ${this.min} e ${this.max}!`
        }
        if (isNaN(numGames) || numGames <= 0){
            return `Erro no segundo parametro. Digite um número maior que 0!`
        }
        for (let n = 0; n < numGames; n++){
            this.generated++
            let table = []
            for (let i = 0; i < numMarks; i++){
                table.push(Math.floor(Math.random()* (this.gameNumberRange) + 1))
                for (let getElement of table){
                    indexPosition = table.indexOf(getElement)
                    
                }
                if (indexPosition != i){
                    table.pop()
                    i--
                }
            }
            table.sort(function compareNumbers(a, b){return a - b})
            result.push(`Jogo ${n+1} >> ${table}`)
        }
        return result
    }
    getLog(userName){
        var os = require('os')
        userName = os.hostname
        return `Jogador: ${userName}\nChamadas de função: ${this.occurrences}\nJogos gerados: ${this.generated}\nErros: ${this.errors}`
    }
}
module.exports = (Loteria)