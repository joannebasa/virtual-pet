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
  this.hunger -=3;
};

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

/* To do:
  - give Pet a feed() method - done
  - calling feed() should decrease hunger level by 3
  - hunger level should not go below 0
*/