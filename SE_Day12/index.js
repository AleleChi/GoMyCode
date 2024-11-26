// function factoral(num){
//     if (num<0) return "Number cannot be negative";
//     let result = 1
//     while (num > 1){
//         result *= num
//         num--;
//     }
//     return result
// }

// console.log(factoral(4))

//different sqaures from Edabit

// function numberOfSqaures(num) {
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i * i;
//   }
//   return total;
// }
// console.log(numberOfSqaures(8));

//

// function number(num) {
//   switch (num) {
//     case 1:
//       console.log("Check the fan");
//       break;
//     case 2:
//       console.log("Emergency stop");
//       break;
//     case 3:
//       console.log("Pump Error");
//       break;
//     case 4:
//       console.log("C");
//       break;
//     case 5:
//       console.log("Temperature Sensor");
//       break;
//     default:
//       console.log("101");
//   }
// }

// number(7);


//Using the If Logic

// function number1(num){
//     if (num ==1){
//         return "Check the fan: e1"
//     } 
//     else if (num == 2) {
//         return "Emergency stop: e2"
//     } else if (num ==3){
//         return "Pump Error: e3"
//     } else if (num== 4){
//         return "C: e4"
//     } else if (num == 5){
//         return "Temperature Sensor: e5"
//     } else {
//         return "101"
//     }
// }

// console.log(number1(2))

// function number2(num){
//     let result = (
//         num == 1 ? "Check the fan: e1" :
//         num == 2 ? "Emergency stop: e2" :
//         num == 3 ? "Pump Error: e3" :
//         num == 4 ? "C: e4" :
//         num == 5 ? "Temperature Sensor: e5" :
//         "101"
//     )
//     return result
// }

// console.log(number2(4))

// function number3(num){
//     let errorMessage = {
//         1: "Check the fan: e1",
//         2: "Emergency stop: e2",
//         3: "Pump Error: e3",
//         4: "C: e4",
//         5: "Temperature Sensor: e5",
        
//     };
//     return errorMessage[num] || "101"
// }
// console.log(number3(3))


// let person = {
//     name: "John",
//     age: 30,
//     occupation: "Software Engineer",
//     address: " No 9 Onumiri Street"
// }
// var num = 3
// var num2 = 5
// num++
// num2--
// var sum = num + num2
// var result = sum ** 2
// console.log(result)

// let a = 8
// let b = 10
// a%=b
// console.log(a)
// var a = 3;
// a += 2;
// a -= 1;
// a **= 2;
// a /= 4;
// a %= 3;
// var result = a;
// console.log(result)



// function nuM(x) {
//     if (typeof x === "number") {
//         console.log(`${x} is a number`);  
//     } else {
//         console.log(`${x} is not a defined value as entered`);  
//     }
// }

// nuM(4);  

// function showName(name1){
//     switch(name1){
//         case 1:
//             console.log("Alele Chi")
//             break 
//             case 2:
//                 console.log('Dera')
//                 break
//                 default:
//                     console.log("Name not foundddddd")
//     }
// }
// showName(6)
// var a= 3

// switch (a) {
// 	case 4:
// 		alert( 'Exactly!' );
// 		break;
// 	default:
// 		alert( "I don't know such values" );
// 		break;
// 	case 3:
// 		alert( 'Too small' );
// 		break;  
// 	case 5:
// 		alert( 'Too large' );
// 		break; 
// }

// This code will return “Too small” with no shame

// let numbers = [19,65, 1,2,6,1,9,9,2,1]
// let sum =0
// let i = 0
// while (i<numbers.length){
//   sum += numbers[i]
//   i+=1
// }

// `The loop will be executed ${i} times`
// console.log(sum)

// var i = 5;
// for (; i < 5; i++) {
//    console.log(i);
// }

// let numbers = [19, 65, 1,2,6,1,9,9,2,1]
// let sum = 0
// for (let i in numbers){
//     if (i % 2 == 0) continue
//     sum += numbers[i]
// }

// console.log(sum)



// function countTrue(arr) {
// 	let count = 0
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] == true){
//             count++
//         }
//     }
//     return count
// }

// console.log(countTrue([true, false, false, true, false]));

function reverseString(str){
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    console.log(reverseArray)
}
