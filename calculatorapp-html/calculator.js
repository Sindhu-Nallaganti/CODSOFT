let display = document.getElementById("display");

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    
    if ("+-*/".includes(lastChar)) {
        return;
    }

    display.innerText += operator;
}

function appendDot() {
    let lastNumber = display.innerText.split(/[\+\-\*\/]/).pop();

    if (!lastNumber.includes(".")) {
        display.innerText += ".";
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}
