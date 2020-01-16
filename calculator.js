const screenAfterButtonClick = document.querySelector('p');
screenAfterButtonClick.className = "result";
const buttons = [...document.querySelectorAll('button')];

buttons.forEach(button => {
    button.addEventListener('click', display);
});

let finalDecision = "";
let firstParam = "";
let secondParam = "";
function display(){
    if ((this.textContent == "*") || (this.textContent == "/") || (this.textContent == "-") ||
    (this.textContent == "+")) {
        
        firstParam = parseInt(screenAfterButtonClick.textContent);
        screenAfterButtonClick.textContent = "";
        finalDecision = this.textContent;
        
    } else if (this.textContent == "=") {
        secondParam = parseInt(screenAfterButtonClick.textContent);
        screenAfterButtonClick.textContent = operate(firstParam,secondParam,finalDecision);     
    } else if (this.textContent == "C"){
        finalDecision = "";
        firstParam = "";
        secondParam ="";
        screenAfterButtonClick.textContent = "";
    }else {
        screenAfterButtonClick.textContent += this.textContent;
    }
}
//|| (this.textContent == "C")) bunu sonra koy

function add(a,b) {
    return a+b;
}

function substract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;   
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,c) {
    switch (c) {
        case "+":
            return add(a,b);
            break;
        case "-":
            return substract(a,b);
            break;
        case "*":
            return multiply(a,b);
            break;
        case "/":
            return divide(a,b);
            break;        
    }
}

