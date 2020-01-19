const screenAfterButtonClick = document.querySelector('p');
screenAfterButtonClick.className = "result";
const buttons = [...document.querySelectorAll('button')];
const dotbutton = document.querySelector('button[id="."]');
let keyboardInput = "";

window.addEventListener('keydown', keyboard);

buttons.forEach(button => {
    button.addEventListener('click', display);
});

let control = 0;
function displayResult(resultScreen){
    let finalResult = new Function('"use strict";return ' + resultScreen)();    
    // return finalResult.toPrecision(2);  
    if (finalResult.toString().length >= 12){
        let count = parseInt(Math.round(finalResult).toString().length);
        if (count > 11){
            count = 11;
        }
        return finalResult.toFixed(11-count);
    } else {
        return finalResult;
    }   
}


//add keyboard support
function keyboard(){
    console.log(event.keyCode);
    if ((event.keyCode == 49) || (event.keyCode == 97)){
        keyboardInput = "1";
        display();
    } else if ((event.keyCode == 48) || (event.keyCode == 96)){
        keyboardInput = "0";
        display();
    } else if ((event.keyCode == 50) || (event.keyCode == 98)){
        keyboardInput = "2";
        display();
    } else if ((event.keyCode == 51) || (event.keyCode == 99)){
        keyboardInput = "3";
        display();
    } else if ((event.keyCode == 52) || (event.keyCode == 100)){
        keyboardInput = "4";
        display();
    } else if ((event.keyCode == 53) || (event.keyCode == 101)){
        keyboardInput = "5";
        display();
    } else if ((event.keyCode == 54) || (event.keyCode == 102)){
        keyboardInput = "6";
        display();
    } else if ((event.keyCode == 55) || (event.keyCode == 103)){
        keyboardInput = "7";
        display();
    } else if ((event.keyCode == 56) || (event.keyCode == 104)){
        keyboardInput = "8";
        display();
    } else if ((event.keyCode == 57) || (event.keyCode == 105)){
        keyboardInput = "9";
        display();
    } else if (event.keyCode == 46){
        keyboardInput = "C";
        display();
    } else if (event.keyCode == 191){
        keyboardInput = ".";
        display();
    } else if (event.keyCode == 106){
        keyboardInput = "*";
        display();
    } else if (event.keyCode == 111){
        keyboardInput = "/";
        display();
    } else if (event.keyCode == 107){
        keyboardInput = "+";
        display();
    } else if (event.keyCode == 109){
        keyboardInput = "-";
        display();
    } else if (event.keyCode == 13){
        keyboardInput = "=";
        display();
    } else if (event.keyCode == 8){
        keyboardInput = "<";
        display();
    }
    keyboardInput = "";
}




function display(){
    if (keyboardInput != ""){
        this.textContent = keyboardInput;
    }
    if (this.textContent == "C"){
        screenAfterButtonClick.textContent = "";
    } else if (this.textContent =="<"){
        screenAfterButtonClick.textContent = screenAfterButtonClick.textContent.slice(0, -1);
    } else if((this.textContent == "*") || (this.textContent == "/") || (this.textContent == "+") || (this.textContent == "-")) {
        control = 0;
        if ((screenAfterButtonClick.textContent.substr(-1) == "*") || (screenAfterButtonClick.textContent.substr(-1) == "/")
        || (screenAfterButtonClick.textContent.substr(-1) == "+") || (screenAfterButtonClick.textContent.substr(-1) == "-")) {
            screenAfterButtonClick.textContent = screenAfterButtonClick.textContent.replace(/.$/,this.textContent);
        } else if (screenAfterButtonClick.textContent.substr(-1) != "."){
            screenAfterButtonClick.textContent += this.textContent;
            dotbutton.disabled = false; 
        } else {
            screenAfterButtonClick.textContent += this.textContent;
        }
          
    } else if(this.textContent == "."){
        console.log(screenAfterButtonClick.textContent.substr(-1));
        if (screenAfterButtonClick.textContent.substr(-1) != "."){
            screenAfterButtonClick.textContent += this.textContent;
            dotbutton.disabled = true;
        }
    } else if (this.textContent != "="){
        if (control == 1){
            if ((this.textContent != "*") || (this.textContent != "/") || (this.textContent != "+") || (this.textContent != "-")){
                screenAfterButtonClick.textContent = "";
                control = 0;
            }
        } 
    screenAfterButtonClick.textContent += this.textContent;
    } else if (this.textContent == "=") {
        displayResult(screenAfterButtonClick.textContent);
        screenAfterButtonClick.textContent = displayResult(`${screenAfterButtonClick.textContent}`);
        control = 1;
    }
    
    keyboardInput = "";
}
