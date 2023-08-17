let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset")
let resultElement = document.getElementById("result");

calculate.addEventListener('click', (e)=> {
    e.preventDefault();

    let userInput1 = Number(document.getElementById("input-1").value);
    let userInput2 = Number(document.getElementById("input-2").value);
    let operator = document.getElementById("input-3").value;
    
    let result;

    if(operator === "Addition"){
        result = userInput1 + userInput2;
    } else if (operator === "Subtraction"){
        result = userInput1 - userInput2;
    } else if (operator === "Multiplication"){
        result = userInput1 * userInput2;
    } else if (operator === "Division"){
        if(secondNumber !== 0){
            result = userInput1 / userInput2;
        } else {
            alert("Cannot divide by 0");
        }
    } else {
        result = "Invalid";
    }

    resultElement.innerText = result;
});

reset.addEventListener('click', () => {
    resultElement.innerText = "Result"
})
