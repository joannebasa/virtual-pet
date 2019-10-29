// maximum/minimum stats
const max_fitness = 10;
const min_hunger = 0;

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

  if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
};

Pet.prototype.feed = function() {
 // this.hunger -=3;
  if ((this.hunger  - 3) >= 0 ) {
        this.hunger -= 3;
      } else {
        this.hunger = 0;
      }
};

Pet.prototype.checkUp = function() {

  if (this.fitness >=3 && this.hunger <=5){
    return "I feel great";
  }

  if (this.fitness <=3 && this.hunger >=5){
    return "I am hungry and I need a walk";
  }

  if (this.fitness <=3) {
    return "I need a walk";
  }

  if (this.hunger >=5) {
    return "I am hungry";
  }

};

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

/* To do:
  - checkUp() method - 
  - if fitness <=3  - "I need a walk",- done
  if hunger >=5 - "I am hungry", - done
  if BOTH ARE TRUE - "I am hungry and I need a walk", - done
  if neither are true - "I feel great" - done
*/