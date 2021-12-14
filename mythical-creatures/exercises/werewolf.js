class Werewolf {
  constructor(name) {
    this.name = name
    this.form = 'human'
    this.hungry = false
  }

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf'
      this.hungry = true
      return 'Aaa-Woooo!'
    }
    if (this.form = 'wolf') {
      this.form = 'human'
      this.hungry = false
      return 'Where are I?'
    }
  }

  eatVictim(deadPerson) {
    if (this.hungry = true && this.form === 'wolf') {
      deadPerson.alive = false
      this.hungry = false
      this.form = 'human'
      return `Yum, ${deadPerson.name} was delicious.`
    }
    return `No way am I eating ${deadPerson.name}, I'd like a burger!`
  }
}

module.exports = Werewolf;
