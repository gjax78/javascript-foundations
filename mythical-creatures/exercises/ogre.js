class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp'
    this.swings = 0
  }

  encounter(human) {
    human.encounterCounter += 1
    if (human.noticesOgre()) {
      this.swings++
    }
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings += 1
  }

  apologize(human) {
    human.knockedOut = false
  }
}






module.exports = Ogre;
