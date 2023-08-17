let calculate = document.getElementById("calculate");
let reset = document.getElementById("reset")
let resultElement = document.getElementById("result");

calculate.addEventListener('click', (e)=> {
    e.preventDefault();

    let userInput1 = Number(document.getElementById("input-1").value);
    let userInput2 = Number(document.getElementById("input-2").value);
    let operator = document.getElementById("input-3").value;
    
    let result;

    switch(operator) {
        case "+":
            result = userInput1 + userInput2;
        break;
        case "-":
            result = userInput1 - userInput2;
        break;
        case "*":
            result = userInput1 * userInput2;
        break;
        case "/":
            result = userInput2 !== 0 ? userInput1 / userInput2 : 'Cannot divide by zero';
        break;
        default: 
            result = "Invalid";
    }

    resultElement.innerText = result;
});

reset.addEventListener('click', () => {
    resultElement.innerText = "Result"
})
