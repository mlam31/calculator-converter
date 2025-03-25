const display = document.getElementById("display")

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

const toggleConvertedBtn = document.getElementById("toggleConvertedBtn")
function toggleConvert(){
    if (toggleConvertedBtn.className === "nonConvertedBtn"){
        toggleConvertedBtn.className = "convertedBtn"
        console.log(toggleConvertedBtn.className)
    }else {
        toggleConvertedBtn.className = "nonConvertedBtn"
        console.log(toggleConvertedBtn.className)
    }
}

fetch("https://v6.exchangerate-api.com/v6/5f71cff4e788356479604a66/latest/USD")
    .then(data => console.log(data))
    .catch(error => console.error(error))