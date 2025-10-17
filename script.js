// Animal constructor
function Animal(species) {
  this._species = species;
}

// Getter for species
Animal.prototype.species = function() {
  return this._species;
};

// Method to make a sound
Animal.prototype.makeSound = function() {
  console.log(`The ${this._species} makes a sound`);
};

// Cat constructor inheriting from Animal
function Cat(species) {
  Animal.call(this, species);
}

// Inherit from Animal prototype
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

// Cat-specific method
Cat.prototype.purr = function() {
  console.log("purr");
};

// Dog constructor inheriting from Animal
function Dog(species) {
  Animal.call(this, species);
}

// Inherit from Animal prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Dog-specific method
Dog.prototype.bark = function() {
  console.log("woof");
};

// Do not change code below
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
