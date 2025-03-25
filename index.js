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

const toggleConvertedBtn = document.getElementById("toggleConvertedBtn")
toggleConvertedBtn.addEventListener('click', function(){
    if (this.className === "nonConvertedBtn"){
        this.className = "convertedBtn"
        console.log(this.className)
    }else {
        this.className = "nonConvertedBtn"
        console.log(this.className)
    }

})