function Mammal(name) {
    this.name = name;
    this.offspring = [];
}

Mammal.prototype.sayHello = function () {
    return `My name is ${this.name}!`;
}

Mammal.prototype.haveBaby = function () {
    let child = new Mammal(`Baby ${this.name}`);
    this.offspring.push(child);
    return child;
}

function Cat(name, color) {
    Mammal.call(this, name);
    this.color = color;
}

//Cat.prototype's __proto__ is now linked to an empty object
//which is now linked to Mammal.prototype... and we reattach the
//constructor property and link it back to the original function
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function (color) {
    let kitten = new Cat(`Baby ${this.name}`, color);
    this.offspring.push(kitten);
    return kitten;
}