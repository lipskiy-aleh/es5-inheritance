function Animal(type, name) {
    this.type = type
    this.name = name
}

Animal.prototype.eat = function() {
    console.log(`${this.type} ${this.name} is eating`)
}

Animal.prototype.sleep = function() {
    console.log(`${this.type} ${this.name} is sleeping`)
}

export default Animal