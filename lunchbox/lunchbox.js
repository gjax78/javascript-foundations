class LunchBox {
  constructor(lunchbox) {
    this.owner = lunchbox.owner
    this.material = lunchbox.madeOf
    this.shape = lunchbox.shape
    this.color = lunchbox.color
    this.snacks = []
  }

  acquireSnack(snackType) {
    this.snacks.push(snackType)
    snackType.isInLunchBox = true
  }

  findHealthySnacks(healthySnacks) {
    healthySnacks = []
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type)
      }
    }
    return healthySnacks
  }
}

module.exports = LunchBox;
