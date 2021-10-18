class Animal {
    #name;
    constructor(name) {
        this.#name = name
    }
    get name() {
        return this.#name
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.created = new Date()
    }
}

const ab = new Dog('cahk')
console.log(ab.created)
console.log(ab.name)

