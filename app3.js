const footballer = {
  fullName: 'Cristiano Ronaldo',
  attack() {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function(newPlayer) {
    console.log(`${this.fullName} уходит на замену.
    На поле выходит ${newPlayer}`);
  }
};


const scoreCall = footballer.scoreGoal
scoreCall.call(footballer, 'Сиииии')

const substitutionApply = footballer.goToSubstitution
substitutionApply.apply(footballer, ['Paulo Dibala'])

const bindAttack = footballer.attack.bind(footballer)
bindAttack()