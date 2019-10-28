// maximum fitness level
const max_fitness = 10;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype.growUp = function() {
  this.age +=1;
  this.hunger +=5;
  this.fitness -=3;
};

Pet.prototype.walk = function() {
  //this.fitness +=4; //needs max level at 10

if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  
};

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

/* To do:
  - give Pet function a walk() method that increases fitness level by 4 - done
  - maximum Pet fitness level should be 10

*/