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

    it('should have initial fitness level of 10', () => {
      const pet = new Pet('Fido');

      expect(pet.fitness).toEqual(10);

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

    it('should decrease fitness level by 3', () => {

      const pet = new Pet('Fido');

      pet.growUp();

      expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
  
  it('walk() should increase fitness level by 10', () => {
    const pet = new Pet('Fido');

    pet.fitness = 4;
    pet.walk();

    expect (pet.fitness).toEqual(8);
  });

  it('fitness level cannot go higher than 10', () => {
    const pet = new Pet('Fido');
    
    pet.fitness = 7;
    pet.walk();
        
    expect(pet.fitness).toEqual(10);
  });
});
    
describe('feed', () => {
  it('feed() should decrease hunger level by 3', () => {
    const pet = new Pet('Fido');
  
    pet.hunger = 4;
    pet.feed();
  
    expect (pet.hunger).toEqual(1);
  });  

  it('hunger level cannot go lower than 0', () => {
    const pet = new Pet('Fido');
  
    pet.hunger = 2;
    pet.feed();
  
    expect (pet.hunger).toEqual(0);
  });  
});

describe('checkUp', () => {
  it('returns "I need a walk" if fitness level is 3 or less', () => {
    const pet = new Pet('Fido');
    
    pet.fitness = 1;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I need a walk");
  });

  it('returns "I am hungry and I need a walk" if fitness level is 3 or less AND hunger is 5 or more', () => {
    const pet = new Pet('Fido');
    
    pet.fitness = 1;
    pet.hunger = 7
    pet.checkUp();

    expect(pet.checkUp()).toBe("I am hungry and I need a walk");
  });

  it('returns "I am hungry" if hunger level is 5 or more', () => {
    const pet = new Pet('Fido');
    
    pet.hunger = 8;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I am hungry");
  });

  it('returns "I am fine" if neither are true', () => {
    const pet = new Pet('Fido');
    
    pet.hunger = 1;
    pet.fitness = 5;
    pet.checkUp();

    expect(pet.checkUp()).toBe("I feel great");
  });
  
});