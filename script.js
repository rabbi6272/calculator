const result = document.getElementById("result"); 
let buttons = document.querySelectorAll('input');

function del() {
    let x = result.value.slice(0, -1)
   console.log(x);
   result.value = x;
 
}
function percentage() {
    let x = result.value
    let y = eval(x)
    result.value = (y /= 100)
    return y
}
function display(val) {
    result.value += val
    return val
}

function solve(){
    let x = result.value
    let y = eval(x);
    result.value = y
    return y
}

function clearScreen(){
   result.value = ''
}