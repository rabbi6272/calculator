const buttonList = document.querySelectorAll(".button");
var numberOfButtons = buttonList.length;
const addButton = document.querySelector(".button19");
const substractButton = document.querySelector(".button12");
const multiplyButton = document.querySelector(".button8");
const divisinButton = document.querySelector(".button4");
const calcButton = document.querySelector(".button16");
const result = document.getElementById("result"); 
function del() {
    var io = result.value[-1];
    console.log(io);
}

function display(val) {
    result.value += val
    return val
}

function solve(){
    let x = result.value
    let y = eval(x);
    document.getElementById('result').value = y
    return y
}

function clearScreen(){
   result.value = ''
}