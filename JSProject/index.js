
//function to reverse strings
function reverseString(){
    let str = "Hello World";
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
     reversedStr += str[i]
    }
    return reversedStr;

}

console.log(reverseString())

//function to count characters in a string

function countChar(){
    let str = "Hello World";
    let count = 0
    for( let i = 0; i < str.length; i++){
        count++;
    }
    return count
}

console.log(countChar())

//function Capitalise

function Capitalise(){
    let str = "goMyCode is an awesome platform for engineering programs";
    const words = str.split(" ")
    for( let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)

    }
    return words.join(" ")
     
}
console.log(Capitalise())

//Maximum and Minimum numbers in an Array

let arrayNumbers = [20, 9, 5, 0, 1, 6, 30, 50, 4]
let minValue = Math.min(...arrayNumbers)
console.log(minValue)
let maxValue = Math.max(...arrayNumbers)
console.log(maxValue)

//sum of array
let arrY =  [20, 9, 5, 0, 1, 6, 30, 50, 4]
let sum = 0
for (let i = 0; i < arrY.length; i++) {
    sum += arrY[i]
}
console.log(sum)


//filter method

const arr = [20, 9, 5, 0, 1, 6, 30, 50, 4]

const arrFilter = arr.filter(Number => Number%2 == 0)
console.log("Filtered Array is", arrFilter)

//funtion factoria

function factorial(n){
    if (n == 0) return 1;
    else return n * factorial(n - 1);
    
}
let n = 6
    console.log(factorial(n))

    //function prime numbers

    function checkPrime(num){
        let result = true
        for (let i = 2; i <= num -1; i++) {
            if (num % i == 0) {
                result = false
                break
            }
        }

        if (result == true){
            console.log(`${num} is prime`)
        } else {
            console.log(`${num} is not prime`)
        }
    }

    checkPrime(5)
    checkPrime(9)

    //function fibonacci

    function fibonacci(num){
        let num1 = 0
        let num2 = 1
        let sum
        if (num===1){
            return num1
        } else if (num ===2){
            return num2
        } else {
            for (let i = 3; i < num; i++) {
                sum = num1 + num2
                num1 = num2
                num2 = sum
        }
 return num2
    }

}
console.log(`Fibonacci(5) is ${fibonacci(5)}`)
console.log(`Fibonacci(9) is ${fibonacci(9)}`)