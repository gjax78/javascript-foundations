class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    }

  celebrateBirthday() {
    this.age += 1;
    if (this.age <= 32)
    return true;
    if (this.age > 32)
    return false;
  }

  // timeTravel() {
  //   (32 <= this.age <= 101)
  //
  //   if (this.age <= 32) {
  //     return true
  //   } else (this.age > 32) {
  //     return false
  //   } else if (this.age )
  // }
}
// 0-32 = child
// 33 - 100 = adult
// 100+ = old
module.exports = Hobbit;
