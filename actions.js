function add(){
    num1 = Number(document.getElementById("first entry box").value)
    num2 = Number(document.getElementById("second entry box").value)
    if (num1 > 0 && num2 > 0) {
        document.getElementById("answer").innerHTML = num1 + num2
    } else {
        document.getElementById("answer").innerHTML = "invalid input"
    }
}

function subtract(){
    num1 = Number(document.getElementById("first entry box").value)
    num2 = Number(document.getElementById("second entry box").value)
    if (num1 > 0 && num2 > 0) {
        document.getElementById("answer").innerHTML = num1 - num2
    } else {
        document.getElementById("answer").innerHTML = "invalid input"
    }
}

function divide(){
    anum1 = Number(document.getElementById("first entry box").value)
    num2 = Number(document.getElementById("second entry box").value)
    if (num1 > 0 && num2 > 0) {
        document.getElementById("answer").innerHTML = num1 / num2
    } else {
        document.getElementById("answer").innerHTML = "invalid input"
    }
}

function multiply(){
    num1 = Number(document.getElementById("first entry box").value)
    num2 = Number(document.getElementById("second entry box").value)
    if (num1 > 0 && num2 > 0) {
        document.getElementById("answer").innerHTML = num1 * num2
    } else {
        document.getElementById("answer").innerHTML = "invalid input"
    }
}

function modulus(){
    num1 = Number(document.getElementById("first entry box").value)
    num2 = Number(document.getElementById("second entry box").value)
    if (num1 > 0 && num2 > 0) {
        document.getElementById("answer").innerHTML = num1 % num2
    } else {
        document.getElementById("answer").innerHTML = "invalid input"
    }
}