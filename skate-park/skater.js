class Skater {
  constructor(human, treflip) {
    this.name = human.name;
    this.skill = human.skill;
    this.tricks = human.tricks;
    this.money = human.cash;
    this.frustration = 0;
  }

  practice(trick) {
    if (!this.tricks[trick]) {
      this.frustration++
    }
    if (this.frustration === 3) {
      this.tricks[trick] = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
  }
}







module.exports = Skater;
