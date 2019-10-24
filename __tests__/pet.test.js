const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  
    it ('sets the name property', () => {
      const pet = new Pet('Fido');

      expect(pet.name).toEqual('Fido');
    });

    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.age).toEqual(0);
    });

    it('Pet must have an initial hunger level of 0', () => {
      const pet = new Pet('Fido');

      expect(pet.hunger).toEqual(0);

    });
});

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');

      pet.growUp();
      
      expect(pet.age).toEqual(1);
    });

    it('should increase hunger property by 5', () => {

      const pet = new Pet('Fido');

      pet.growUp();
      
      expect(pet.hunger).toEqual(5);

    });
  });