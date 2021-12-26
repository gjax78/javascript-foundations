class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap
    this.frustration = 0
    this.confidence = 0
  }

  calculateAvg(number) {
    this.handicap + number
    return `I usually shoot a ${this.handicap + number} on average.`
  }

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration = 500
    } else {
      this.frustration = 100
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }

  whatYaShoot(number) {
    if (number < 0) {
      this.frustration = 0
      return 'I AM THE GREATEST GOLFER ALIVE!'
    }
    if (number === 0) {
      this.frustration = 10
      return 'Booyah!'
    }
    if (number === 2) {
      this.frustration = 30
      return 'Doh!'
    }
    if (number === 3 || 4) {
      this.frustration = 20
      return 'Doh!'
    }
  }
}

module.exports = Golfer;
