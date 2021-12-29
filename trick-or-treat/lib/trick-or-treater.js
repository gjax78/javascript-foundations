class TrickOrTreater {
  constructor(person, bag) {
    this.dressedUpAs = person.style
    this.bag = bag
    this.hasCandy = false
    this.countCandies = 0
  }

  putCandyInBag(candy) {
    this.hasCandy = true
    this.bag.fill(candy)
    this.countCandies++
  }

  eat(candy) {
    this.countCandies--
    this.bag.candies.pop(candy)
  }
}






module.exports = TrickOrTreater;
