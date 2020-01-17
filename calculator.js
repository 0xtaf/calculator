const screenAfterButtonClick = document.querySelector('p');
screenAfterButtonClick.className = "result";
const buttons = [...document.querySelectorAll('button')];
const dotbutton = document.querySelector('button[id="."]');


buttons.forEach(button => {
    button.addEventListener('click', display);
});


function displayResult(resultScreen){
    return new Function('"use strict";return ' + resultScreen)();      
}


function display(){
    if (this.textContent == "C"){
        screenAfterButtonClick.textContent = "";
    } else if((this.textContent == "*") || (this.textContent == "/") || (this.textContent == "+") || (this.textContent == "-")) {
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
    screenAfterButtonClick.textContent += this.textContent;
    } else if (this.textContent == "=") {
        displayResult(screenAfterButtonClick.textContent);
        screenAfterButtonClick.textContent = displayResult(`${screenAfterButtonClick.textContent}`);
    }
}