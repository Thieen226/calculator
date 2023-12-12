let buttons = document.querySelectorAll(".buttons");
let screen = document.getElementById("screen");
let firstNumber = 0;
let secondNumber = 0;
let operation = "";

function handleClick(e){
    let buttonClicked = e.target; 
    if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === "."){
        if(screen.innerText === "0"){
            screen.innerText = buttonClicked.innerText;
        }
        else{
            screen.innerText += buttonClicked.innerText;
        }
    }
    else if(buttonClicked.innerText === "AC"){
        screen.innerText = 0;
    }
    else if(buttonClicked.innerText === "+" || buttonClicked.innerText === "-" || buttonClicked.innerText === "x" || buttonClicked.innerText === "÷"){
        firstNumber = screen.innerText;
        operation = buttonClicked.innerText;
        screen.innerText = 0;
    }
    else{
        secondNumber = screen.innerText;
        if(operation === "+"){
            addNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
        }
        if(operation === "-"){
            subtractNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
        }
        if(operation === "÷"){
            divideNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
            if(secondNumber === "0"){
                screen.innerText = "error";
            }
        }
        if(operation === "x"){
            multiplyNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
        }
    }
}

function addNumbers(num1, num2){
    screen.innerText = (num1 + num2);
}

function subtractNumbers(num1, num2){
    screen.innerText = num1 - num2;
}

function divideNumbers(num1, num2){
    screen.innerText = num1/num2;
}

function multiplyNumbers(num1, num2){
    screen.innerText = num1*num2;
}

buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
})