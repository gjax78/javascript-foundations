const Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name
    this.location = stark.area || 'Winterfell'
    this.safe = false
  }

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming'
    } else {
      return 'The North Remembers'
    }
  }

  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, this.location);
    direwolf.starksToProtect.push(this);
    this.safe = true
    return direwolf;
  }
}

module.exports = Stark;
