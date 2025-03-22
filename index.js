const display = document.getElementById("display")
console.log("Hello world")

function appendToDisplay(input){
    let operateurs = ["+", "-", "*", "/", "%"];
    if (operateurs.includes(display.value.at(-1)) && operateurs.includes(input)) {
        return;
    }
    display.value += input;
}

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}