class Centaur {
  constructor(centaur) {
    this.name = centaur.name
    this.breed = centaur.type
    this.cranky = false
    this.standing = true
    this.count = 0
    this.layingDown = false
  }

  shootBow() {
    if (this.cranky || this.layingDown) {
      return 'NO!'
    } else {
      this.activityCount += 1
      if (this.activityCount = 3) {
      this.cranky = true;
    }
      return 'Twang!!!'
    }
  }

  run() {
    if (this.cranky|| this.layingDown) {
      return 'NO!'
    } else {
      this.activityCount += 1
      if (this.activityCount = 3) {
        this.cranky = true;
    }
      return 'Clop clop clop clop!!!'
    }
  }

  sleep() {
    if (this.standing) {
      return 'NO!'
    } else {
      this.cranky = false
      return 'ZZZZ'
    }
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.layingDown = false
    this.standing = true
  }

  drinkPotion() {
    if (this.standing) {
    this.cranky = false
  } else {
    return 'Not while I\'m laying down!'
    }
  }
}



module.exports = Centaur;
