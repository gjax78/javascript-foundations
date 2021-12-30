var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor (name) {
    this.name = name
    this.statues = []
  }

  gazeAtVictim(person) {
    var person = new Statue(person.name)
    this.statues.push(person)
    if (this.statues.length > 3) {
      var freedPerson = new Person(this.statues[0].name)
      freedPerson.mood = 'relieved'
      this.statues.shift()
      return freedPerson
    }
  }
}




module.exports = Medusa;
