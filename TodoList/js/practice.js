class Animal {
    constructor(name, breed, isWild) {
        this.name = name
        this.breed = breed
        this.isWild = isWild
    }

    makeSound(){
        console.log(`${this.name} makes wild sound and it's ${this.isWild}`)
    }
}

const dog = new Animal("Dog", "German Sharpherd", false)

dog.makeSound()
console.log(dog)