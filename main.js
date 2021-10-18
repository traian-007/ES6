class Animal {
    #name;
    constructor() {
        this.#name = "name"
    }
    get boom() {
        return this.#name
    }
    set changeName(name) {
        this.#name = name
    }
}

class Dog extends Animal {
    constructor(name) {
        super()
        this.name = name
    }
    parentName() {
            console.log(this.boom)
        }
    changeParentName(name) {
        this.changeName = name
    }
    changeParentNameViaDogName() {
        this.changeName = this.name
    }
}
const ab = new Dog('bob')
ab.created = new Date()
console.log(ab.created)
console.log(ab.name)
console.log(ab.parentName())
ab.changeParentName("gicu")
console.log(ab.parentName())
