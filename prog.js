
let result = rankPlayer(112, 8)

//console.log("O nível do jogador é: " + result)

function rankPlayer(win, loss){
    let rankCategory = win - loss
    //console.log(rankCategory)
    return rankCategory
}

let levelCurrent = levelPlayer()

function levelPlayer() {    
    let level 

    if(result <= 10) {
        level = "Ferro"
    }
    else if (result > 10 && result <= 20) {
        level = "Bronze"
    }
    else if(result >= 21 && result <= 50) {
        level = "Prata"
    }
    else if(result >= 51 && result <= 80) {
        level = "Ouro"
    }
    else if(result >= 81 && result <= 90) {
        level = "Diamante"
    }
    else if(result >= 91 && result <= 100) {
        level = "Lendário"
    }
    else
        level = "Imortal"
    
    return level
}

console.log("O héroi tem o saldo de " + result + ", e está no nível " + levelCurrent)