console.log("xd")
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function multiply() {
    currentNumber = currentNumber * 2;
    currentNumberWrapper.innerHTML = currentNumber;
}
function divide() {
    currentNumber = currentNumber / 2;
    currentNumberWrapper.innerHTML = currentNumber;
}