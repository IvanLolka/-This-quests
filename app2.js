const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав';
  }
}
const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик';
  }
}
function makeDomestic(isdomestic){
  console.log(this.type + " по имени " + this.name + " говорит " + this.makeSound())
  const sound = this.makeSound()
  return {name:this.name,
    type:this.type,
    isDomestic:isdomestic,
    makeSound(){return sound}
  }
}
console.log(makeDomestic.call(dog, true))
console.log(makeDomestic.apply(bird, [false]))
const bind = makeDomestic.bind(dog)
console.log(bind(true))