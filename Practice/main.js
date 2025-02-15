//
//indexOf()
//concat()


//indexOf()
//str.indexOf(searchValue, startIndex)
let text = "Hi my name is Chigozie and i am a student of GoMycode university"
let arr = [10,2,63,80,63]
let result = text.indexOf('GoMycode')
let res = arr.indexOf(63)
console.log(res)
console.log(result)

//concat()
//str.conact(str2, str3, ... strN)

let player1 = "Leonel "
let player2 = "Messi "
let result1 = player1.concat(player2)
console.log(result1)

let greeting = 'Good '
let timeOfGreeting = 'morning '
let punctuation = '!'
let result2 = greeting.concat(timeOfGreeting, punctuation)
console.log(result2)

const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }]

const showOneName = name => people.forEach(person => console.log(person.name))

console.log(showOneName())

//condition? expression if true: expression if false

// const multiply = () => {return 2*3}

const products = [

    { name: 'Milk', price: 15 },
   
    { name: 'Water', price: 9 },
   
    { name: 'Bread', price: 5 },
   
]

const changeProducts = () => products.map( product => ({...product, price: product.price +2}))

console.log(changeProducts())
console.log(products)

const data = [5, 10, 15, 20, 25]

const resd = data.reduce((total, currentValue) => total + currentValue)
console.log(resd)

class Animal {
    constructor(name, color, isWild,sound){
        this.name = name
        this.color = color
        this.isWild = isWild
        this.sound = sound
    }
    makeSound(){
        console.log(`${this.name} ${this.sound}`)
    }
}