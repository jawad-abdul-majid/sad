let display = document.getElementById('display')

function show(data){
    display.value += data
}

function clearDisplay(){
    display.value = ""
}

function equal(){
    display.value = eval(display.value)
}