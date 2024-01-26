const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin() {
    const chance = [0,4]
    let schet = 0
    if (this.archer < attacker.archer){
      schet++
    }
    if (this.footSoldier < attacker.footSoldier){
      schet++
    }
    if (this.cavalry < attacker.cavalry){
      schet++
    }
    if (this.artillery < attacker.artillery){
      schet++
    }
    chance[0] = schet
    return chance
  },
  improveArmy(){
    attacker.archer += 5
    attacker.footSoldier += 5
    attacker.cavalry += 5
    attacker.artillery += 5
  },
  attack(){
    let win = false
    while(win == false){
      let itog = attacker.checkChancesToWin.call(defender)
      if (itog[0] < 3){
        alert("Наши шансы равны " + itog[0] + "/" + itog[1] + ". Необходимо укрепление!")
        attacker.improveArmy()
      } else {
        alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!")
        win = true
      }
    }
  }
}
const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}
const game = attacker.attack
game.call(defender)