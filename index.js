//alert("Hello World");

function clearDisplay() {
    document.getElementById('screen').innerHTML = '0';
    document.getElementById('display').innerHTML = '0';
}

function divide() {
    document.getElementById('screen').innerHTML += '/';
}

function multiply() {
    document.getElementById('screen').innerHTML += '*';
}

function seven() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '7';
    }
    else{
        document.getElementById('screen').innerHTML = '7';
    }
    
}

function eight() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '8';
    }
    else{
        document.getElementById('screen').innerHTML = '8';
    }
}

function nine() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '9';
    }
    else{
        document.getElementById('screen').innerHTML = '9';
    }
}

function subtract() {
    document.getElementById('screen').innerHTML += '-';
}

function four() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '4';
    }
    else{
        document.getElementById('screen').innerHTML = '4';
    }
}

function five() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '5';
    }
    else{
        document.getElementById('screen').innerHTML = '5';
    }
}

function six() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '6';
    }
    else{
        document.getElementById('screen').innerHTML = '6';
    }
}

function plus() {
    document.getElementById('screen').innerHTML += '+';
}

function one() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '1';
    }
    else{
        document.getElementById('screen').innerHTML = '1';
    }
}

function two() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '2';
    }
    else{
        document.getElementById('screen').innerHTML = '2';
    }
}

function three() {
    if (document.getElementById('screen').innerHTML != '0'){
        document.getElementById('screen').innerHTML += '3';
    }
    else{
        document.getElementById('screen').innerHTML = '3';
    }
}

function power() {
    document.getElementById('screen').innerHTML += '^';
}

function zero() {
    document.getElementById('screen').innerHTML += '0';
}


function point() {
    document.getElementById('screen').innerHTML += '.';
}

function equals(){
    var screen = document.getElementById('screen').innerHTML;
    screen = screen.replace("^","**")
    var result = eval(screen)
    document.getElementById('display').innerHTML = result;
}

function back(){
    var screen = document.getElementById('screen').innerHTML;
    if (screen.length == 1){
        document.getElementById('screen').innerHTML = "0"
    }
    else{
        screen = screen.substring(0, screen.length-1);
        document.getElementById('screen').innerHTML = screen;
    }
    
    
}