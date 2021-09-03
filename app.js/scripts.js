// Pin Generate Function
function generatePin(){
    const pin = Math.round(Math.random() * 10000);
    var pinString = pin + '';
    if(pinString.length == 4){
        return pin;     
    }
    else{
        return generatePin();
    }
}
// Pin Generate Button
document.getElementById('generate-pin-button').addEventListener('click', function(){
    var displayPinFeild = document.getElementById('display-input-pin');
    displayPinFeild.value = generatePin();

})
// Get keypad value
document.getElementById('key-pad').addEventListener('click', function(event){
    const inputNumber = event.target.innerText;
    // console.log(inputNumber)
    const calculateDisplay = document.getElementById('submit-pin-number');
    if(isNaN(inputNumber)){
        if(inputNumber == 'C'){
            calculateDisplay.value = '';
        }
    }
    else{
        var previousNumber = calculateDisplay.value;
        const newCalculatorValue = previousNumber + inputNumber;
        calculateDisplay.value = newCalculatorValue;
    }
})
function submitMatched(){
    var pin = document.getElementById('display-input-pin').value;
    const calculateDisplay = document.getElementById('submit-pin-number').value;
    // Error or Successful Massage
    const successMassage = document.getElementById('success-massage');
    const errorMassage = document.getElementById('error-massage');

    if(pin == calculateDisplay){
        errorMassage.style.display = 'none';
        successMassage.style.display ='block';
    }
    else{
        successMassage.style.display ='none';
       errorMassage.style.display = 'block';
    }

}