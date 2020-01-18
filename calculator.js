const screenAfterButtonClick = document.querySelector('p');
screenAfterButtonClick.className = "result";
const buttons = [...document.querySelectorAll('button')];
const dotbutton = document.querySelector('button[id="."]');


buttons.forEach(button => {
    button.addEventListener('click', display);
});

let control = 0;
function displayResult(resultScreen){
    let finalResult = new Function('"use strict";return ' + resultScreen)();    
    // return finalResult.toPrecision(2);  
    return finalResult;
}

//sonuçtan sonra input girilirse baştan yazsın

function display(){
    
    if (this.textContent == "C"){
        screenAfterButtonClick.textContent = "";
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
}