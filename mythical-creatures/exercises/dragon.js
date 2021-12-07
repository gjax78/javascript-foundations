class Dragon {
    constructor(name, rider, hungry) {
      this.name = name;
      this.rider = rider;
      this.hungry = true;
      this.count = 0;
    }

greet(rider) {
  return `Hi, ${this.rider}!`;
  }

eat(hungry) {
  this.hungry = true;
}

eat(){
    this.count += 1;
    if(this.count === 3){
      this.hungry = false;
    }
  }
}

 module.exports = Dragon;
