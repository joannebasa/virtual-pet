
function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    // this.growUp = function() {
    //   this.age +=1;
    //}
};

Pet.prototype.growUp = function() {
  this.age +=1;
  this.hunger +=5;
  this.fitness -=3;
}

// const pet = {
//     name: 'Fido',
//     age: 0,
// };

/* or const pet = {};
pet.name = 'Fido'; */

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

//Pet hunger starts at 0 - done
//growUp() should increase hunger property by 5 - done
//Pet should have initial fitness of 10 - done
//growUp() method should decrease fitness property by 3