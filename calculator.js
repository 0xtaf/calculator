const screenAfterButtonClick = document.querySelector('p');
screenAfterButtonClick.className = "result";
const buttons = [...document.querySelectorAll('button')];

buttons.forEach(button => {
    button.addEventListener('click', display);
});


function displayResult(resultScreen){
    return new Function('"use strict";return ' + resultScreen)();      
}


function display(){
    if (this.textContent == "C"){
        finalDecision = "";
        firstParam = "";
        secondParam ="";
        screenAfterButtonClick.textContent = "";
    } else if (this.textContent != "="){
    screenAfterButtonClick.textContent += this.textContent;  
    } else if (this.textContent == "=") {
        displayResult(screenAfterButtonClick.textContent);
        screenAfterButtonClick.textContent = displayResult(`${screenAfterButtonClick.textContent}`);
    }
}
