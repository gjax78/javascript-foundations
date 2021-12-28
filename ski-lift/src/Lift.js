var Skier = require('./Skier');

class Lift {
  constructor (limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  };

  admitSkier(name, hasLiftTicket) {
    var skier = new Skier(name, hasLiftTicket)
    if (this.skiers.length < this.limit && hasLiftTicket) {
      this.skiers.push(skier);
    } else if (hasLiftTicket) {
        return `Sorry, ${name}. Please wait for the next lift!`;
    } else {
      return `Sorry, ${name}. You need a lift ticket!`;
    }
  }

  startLift() {
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else {
      var openSeats = this.limit - this.skiers.length;
      if (openSeats === 1) {
        return `We still need ${openSeats} more skier!`
      } else {
        return `We still need ${openSeats} more skiers!`
      }
    }
  }
}

module.exports = Lift;


// class Lift {
//   constructor(limit) {
//   this.inService = true;
//   this.limit = 3;
//   this.skiers = [];
//   this.safetyBar = 'up';
//   }
//
//   admitSkier(name, hasLiftTicket) {
//     //we will need 2 elements in this.skiers array
//     //the skiers name at index 1 of the array is Jeff
//     // the skier at 1 will be an object using dot notation
//     //our object at index 1 needs to be an instance of the Skier class
//     // (each skier needs to be an object instance)
//     var skier = new Skier(name, hasLiftTicket)
//     if (this.skiers.length < this.limit && skier.hasLiftTicket) {
//       //because we're already in the instantiation, WE ONLY USE THIS IF WERE
//       //REFERENCING THE CLASS - this is why we reference skier instead of this
//       this.skiers.push(skier)
//     } else if (this.skiers.length > this.limit) {
//       return `Sorry, ${name}. Please wait for the next lift!`
//     } else if (!skier.hasLiftTicket) {
//       return `Sorry, ${name}. You need a lift ticket!`
//     }
//   }
//
//   startLift() {
//     if (this.skiers.length === this.limit) {
//       this.safetyBar = 'down'
//     }
//   }
// }
//
// module.exports = Lift;
