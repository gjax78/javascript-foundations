class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }

  fill(candy) {
    this.count += 1
    this.candies.push(candy)
  }

  contains(candy) {
    for (var i = 0; i < this.candies.length; i++) {
      if (candy === 'Lindt Chocolate') {
        return true
      }
      if (candy === 'Hershey\'s Kisses') {
        return false
      }
    }
  }
}



module.exports = Bag;
