class Centaur {
  constructor(centaur) {
    this.name = centaur.name
    this.breed = centaur.type
    this.cranky = false
    this.standing = true
    this.counter = 0
    this.layingDown = false
  }

  shootBow() {
    this.counter++
    if (this.counter >= 3 && this.cranky) {
      return 'NO!'
    } else if (this.layingDown) {
      return 'NO!'
    } else if (this.counter === 3) {
      this.cranky = true
    }
    return 'Twang!!!'
  }

  run() {
    this.counter++
    if (this.counter > 3 && this.cranky) {
      return 'NO!'
    } else if (this.layingDown) {
      return 'NO!'
    } else if (this.counter === 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    }
    if (this.layingDown) {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  drinkPotion() {
    this.cranky = false
    if (this.layingDown) {
      return 'Not while I\'m laying down!'
    }
  }
}

module.exports = Centaur
