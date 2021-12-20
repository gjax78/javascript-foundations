class Fairy {
  constructor(being) {
    this.name = being;
    this.dust = 10
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief() {
    this.dust = 11
  }

  believe() {
    this.dust = 20
  }

  makeDresses(listOfDresses) {
    for (var i=0; i < listOfDresses.length; i++)
    this.clothes.dresses.push(listOfDresses[i])
  }

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(smallHuman) {
    smallHuman.disposition = "Malicious"
    this.humanWards.push(smallHuman)
    this.disposition = 'Good natured'
    return smallHuman
  }
}





module.exports = Fairy;
