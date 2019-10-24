
function Pet(name) {
    this.name = name;
    this.age = 0;
    // this.growUp = function() {
    //   this.age +=1;
    //}
};

Pet.prototype.growUp = function() {
  this.age +=1;
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