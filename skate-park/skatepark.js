class SkatePark {
  constructor(park, features) {
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features
    this.isPrivate = park.isPrivate || false
    this.cost = park.price || 0
    this.occupants = []
  }

  admit(skaterDude) {
    if (this.occupants.length < 3 && this.isPrivate && this.cost <= skaterDude.money) {
        this.occupants.push(skaterDude);
        skaterDude.money -= this.cost;
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
      } else if (this.occupants.length === 3) {
        return 'Sorry, we are at max capacity. Thank you for understanding.'
      }
      if (this.cost > skaterDude.money) {
        return `Sorry, you don't have enough money.`
      }
      if (this.occupants.length < 3 && !this.isPrivate)
      this.occupants.push(skaterDude)
      return 'Welcome to the free Major Taylor Skatepark!'
  }
}


module.exports = SkatePark;
