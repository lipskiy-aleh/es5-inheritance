import Animal from './Animal.js'
const TYPE = 'cat'

function Cat(name) {
    Animal.call(this, TYPE, name)

    this.catType = 'catType'
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.contructor = Cat
// non-required action (this need only for work Option 2)
Cat.prototype.super = Animal.prototype

Cat.prototype.speak = function() {
    console.log('Myu')
}

Cat.prototype.eat = function() {
    // Option 1
    Animal.prototype.eat.call(this)
    // Option 2
    this.super.eat.call(this)

    console.log('This is method of Cat')
}

export default Cat
