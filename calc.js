let operations = document.querySelectorAll("#operations");
let numbers = document.querySelectorAll("#numbers");
let screen = document.getElementById("screen");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let clickedNumbers = "";

function showNums(e){
    let clickedNumbers = e.target.innerText;
    screen.innerText = clickedNumbers;

    //when AC button is clicked then reset it to 0
    reset.onclick = function(){
        screen.innerText = 0;
    }


}

function calcNums(){
        operations.forEach((e) => {
            let clickedOperations = e.target.innerText;
            if(clickedOperations === "÷"){
                clickedOperations = parseFloat(clickedNumbers)/2;
            }
        })

    }


numbers.forEach((number) => {
    number.addEventListener("click", showNums);
})

operations.forEach((operation) => {
    operation.addEventListener("click", calcNums);
})