/*
function grabValue(){
    var voltageNumbers = document.getElementById('voltageNumber').value;
    createVoltageDivs(voltageNumbers)
}
*/

var vinputs = document.getElementById('voltageInputs');
function createVoltageDivs(range){
for(var i =0;i < 4 ;i++){
     var newVoltageDiv = document.createElement('div');
     id = 'voltageInput' + i+1;
     newVoltageDiv.id= id
     inputs.appendChild(newVoltageDiv)
     fillInput(id,i)
}
}
function fillInput(div,divNumber){
    voltageDiv = document.getElementById(div)
    number = divNumber + 1
    //vrange label
    var label = document.createElement('label')
    label.innerHTML = 'Vrange '+ number + ":"
    voltageDiv.appendChild(label)

    //label input
    var labelInput = document.createElement('label')
    labelInput.innerHTML = "0-5"

}

