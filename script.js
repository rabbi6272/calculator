const result = document.getElementById("result"); 
let buttons = document.querySelectorAll('input');
const p = document.getElementById('result-p');

function del() {
    let x = result.value.slice(0, -1)
   console.log(x);
   result.value = x;
 
}
function percentage() {
    let x = result.value
    let y = eval(x)
   
    return p.innerHTML= (y /= 100)
}
function display(val) {
    result.value += val
    return val
}

function solve(){
    let x = result.value
    let y = eval(x);
    return p.innerHTML=y
}

function clearScreen(){
   result.value = ''
   p.innerHTML= ''
}