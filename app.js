const student = {
  stack: ['HTML'],
  level: 1,
  improveLevel() {
    this.level++
    switch (this.level) {
      case 2:
        this.stack.push("CSS")
        return this
      case 3:
        this.stack.push("javascript")
        return this
      case 4:
        this.stack.push("react")
        return this
      case 5:
        this.stack.push("nodejs")
        return this
      default:
        alert("Студент выучил все технологии!")
        return this
    }
  }
}
const inpu = 5;
for (let index = 0; index < inpu; index++) {
  console.log(student.improveLevel())
}