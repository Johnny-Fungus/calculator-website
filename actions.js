function add(){

    /*
        invalid input if:
            input is an empty string
            input is NaN when converted to a number

        equality operators:
            == equal value
            === equal value and type

            x = "12"
            x == 12 True
            x === 12 False

    */

    /*
    Print outs for de-bugging:
    
    console.log("num1: " + document.getElementById("first entry box").value)
    console.log("num2: " + document.getElementById("second entry box").value)

    console.log("type of num1: " + typeof(document.getElementById("first entry box").value))
    console.log("type of num2: " + typeof(document.getElementById("second entry box").value))

    console.log("num1 converted to number: " + Number(document.getElementById("first entry box").value))
    console.log("num2 converted to number: " + Number(document.getElementById("second entry box").value))

    console.log("NaN comparison: " + Number(document.getElementById("first entry box").value) == NaN)

    console.log("type of Nan: " + typeof(NaN))
    */

    input1 = document.getElementById("first entry box").value
    input2 = document.getElementById("second entry box").value
    // only checking value here because something with a value of "" must have a type of string
    if (input1 == "" || input2 == "") {
        document.getElementById("answer").innerText = "Both Fields Must Be Filled"
    // NaN is the only value in Javascript that doesnt equal itself, therefor you have to check for it by checking if two of the same thing is equal or not
    // if Number(input1) == NaN won't work
    // if Number(input1) != Number(input1) then it must be NaN
    } else if (Number(input1) != Number(input1) || Number(input2) != Number(input2)) {
        document.getElementById("answer").innerText = "Input Must Be A Number"
    } else {
        document.getElementById("answer").innerText = Number(input1) + Number(input2)
    }
}

function subtract(){
    input1 = document.getElementById("first entry box").value
    input2 = document.getElementById("second entry box").value

    if (input1 == "" || input2 == "") {
        document.getElementById("answer").innerText = "Both Fields Must Be Filled"
    } else if (Number(input1) != Number(input1) || Number(input2) != Number(input2)) {
        document.getElementById("answer").innerText = "Input Must Be A Number"
    } else {
        document.getElementById("answer").innerText = Number(input1) - Number(input2)
    }
}

function divide(){
    input1 = document.getElementById("first entry box").value
    input2 = document.getElementById("second entry box").value
    
    if (input1 == "" || input2 == "") {
        document.getElementById("answer").innerText = "Both Fields Must Be Filled"
    } else if (Number(input1) != Number(input1) || Number(input2) != Number(input2)) {
        document.getElementById("answer").innerText = "Input Must Be A Number"
    } else if (Number(input2) == 0) {
        document.getElementById("answer").innerText = "Divide By Zero Error"
    } else {
        document.getElementById("answer").innerText = Number(input1) / Number(input2)
    }
}

function multiply(){
    input1 = document.getElementById("first entry box").value
    input2 = document.getElementById("second entry box").value

    if (input1 == "" || input2 == "") {
        document.getElementById("answer").innerText = "Both Fields Must Be Filled"
    } else if (Number(input1) != Number(input1) || Number(input2) != Number(input2)) {
        document.getElementById("answer").innerText = "Input Must Be A Number"
    } else {
        document.getElementById("answer").innerText = Number(input1) * Number(input2)
    }
}

function modulus(){
    input1 = document.getElementById("first entry box").value
    input2 = document.getElementById("second entry box").value

    if (input1 == "" || input2 == "") {
        document.getElementById("answer").innerText = "Both Fields Must Be Filled"
    } else if (Number(input1) != Number(input1) || Number(input2) != Number(input2)) {
        document.getElementById("answer").innerText = "Input Must Be A Number"
    } else if (Number(input2) == 0) {
        document.getElementById("answer").innerText = "Modulus By Zero Error"
    } else {
        document.getElementById("answer").innerText = Number(input1) % Number(input2)
    }
}