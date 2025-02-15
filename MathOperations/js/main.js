const resultDisplay = document.getElementById('result')
const inputNumber = document.getElementById('inputNumber')
const addBtn = document.getElementById('addBtn')
const subBtn = document.getElementById("subBtn")
const divBtn = document.getElementById('divBtn')
const mulBtn = document.getElementById('mulBtn')

let currentResult =0

function updateResult(newResult){
    currentResult = newResult
    resultDisplay.textContent = currentResult
}

addBtn.onclick = function (){
    const value = parseFloat(inputNumber.value)
  if (!isNaN(value)){
    updateResult(currentResult + value)
  }
}

subBtn.onclick = function(){
    const value = parseFloat(inputNumber.value)
    if (!isNaN(value)){
     updateResult(currentResult - value)
    }
}

divBtn.onclick = function(){
    const value = parseFloat(inputNumber.value)
    if (!isNaN(value) && value !== 0){
        updateResult(currentResult / value)
    } else if (value == 0 ){
  alert('You cannot divide by zero')
    }
}


mulBtn.onclick = function(){
    const value = parseFloat(inputNumber.value)
    if (!isNaN(value)){
        updateResult(currentResult * value)
    }
}

inputNumber.oninput = function(){
    const value = parseFloat(inputNumber.value)
    if (!isNaN(value)){
        resultDisplay.textContent = value
    } else {
        resultDisplay.textContent = currentResult
    }
}