let buttons = document.querySelectorAll(".buttons");
let screen = document.getElementById("screen");
let firstNumber = 0; //keep track of first number
let secondNumber = 0; //keep track of second number
let operation = ""; //keep track of clicked operator buttons

function handleClick(e){
    let buttonClicked = e.target; 
    //if the button is clicked is a number or . then display it on the screen
    if(!isNaN(buttonClicked.innerText)){
        //if the screen is 0 then when the user click a number, it will display that number
        if(screen.innerText === "0" || buttonClicked.innerText === "."){
            screen.innerText = buttonClicked.innerText;
        }

        //allowing the user to add more number ex. 23, 235,..
        else{
            screen.innerText += buttonClicked.innerText;
        }
    }
    else if(buttonClicked.innerText === "."){
        //if the user click . before any number then it will display 0. with the number they want to put
        if(screen.innerText === "0"){
            screen.innerText = "0" + buttonClicked.innerText;
        }
        else{
            screen.innerText += buttonClicked.innerText;
        }
    }
    //click AC button to reset the previous calculation
    else if(buttonClicked.innerText === "AC"){
        screen.innerText = 0;
    }
    //after the user put the first number and click operator buttons then grab the first number 
    else if(buttonClicked.innerText === "+" || buttonClicked.innerText === "-" || buttonClicked.innerText === "x" || buttonClicked.innerText === "÷"){
        firstNumber = screen.innerText;
        operation = buttonClicked.innerText;
        screen.innerText = 0;
    }
    //when the user put the second number and click = button then grab the second number and perform calcution with first number
    else{
        secondNumber = screen.innerText;
        if(operation === "+"){
            addNumbers((firstNumber), (secondNumber));
        }
        if(operation === "-"){
            subtractNumbers((firstNumber), (secondNumber));
        }
        if(operation === "÷"){
            divideNumbers((firstNumber), (secondNumber));
            if(secondNumber === "0"){
                screen.innerText = "error";
            }
        }
        if(operation === "x"){
            multiplyNumbers((firstNumber), (secondNumber));
        }
    }
}

function addNumbers(num1, num2){
    screen.innerText = num1 + num2;
}

function subtractNumbers(num1, num2){
    screen.innerText = num1 - num2;
}

function divideNumbers(num1, num2){
    //use if else statement to check if the calculation give recurring decimal ex. 0.3333333333...
    //check if the first number is smaller than second number then display the result with 5 decimal
    if(num1 < num2){
        screen.innerText = (parseFloat(num1)/parseFloat(num2)).toPrecision(5);
    }
    else{
        screen.innerText = num1/num2;
    }
}

function multiplyNumbers(num1, num2){
    screen.innerText = num1*num2;
}

//everytime the button is clicked execute handleClick function
buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
})