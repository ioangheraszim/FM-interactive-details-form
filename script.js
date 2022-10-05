// Variables 

// Default variables
const form = document.getElementById('form');
const secondForm = document.getElementById('secondForm');
const cardName = document.getElementById('cardname');
const cardNumber = document.getElementById('cardnumber');
const expDateMonth = document.getElementById('expDateMonth');
const expDateYear = document.getElementById('expDateYear');
const cvc = document.getElementById('cvc');

// Oninput variables for default text
const numberCards = document.getElementById('numberofcards');
const nameCards = document.getElementById('nameofcards');
const monthCards = document.getElementById('monthcards');
const yearCards = document.getElementById('yearcards');
const cvcCards = document.getElementById('cvcinfo');
const successInput = document.getElementById('success');

// SHOW SUCCESS
function showSuccess (input) {
    inputControl = input.parentElement;
    inputControl.className = "input-control";    
}

// Function to display the success card after everything is complete
function successCard (){
    successInput.style.display = 'flex';  
    let dissapear = document.querySelector('.bottom-form');
    dissapear.style.display = 'none';
}

// Show Error Function
function showErrorInformation (input, message){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control error';
    const warning = inputControl.querySelector('.errorWarning')
    warning.innerText = message;
}

// regular expression to check for only letters
function lettersOnly (input) {
    let res =/[a-zA-Z]+/g;
    return res.test(input);
}

// regular expression to check for numbers only
function numbersOnly (input){
    let res = /^[0-9\b]+$/;
    return res.test(input);   
}

// Event listener function
form.addEventListener('submit', function(e) {    
    e.preventDefault(); 
    const cardValueName = cardName.value;
    const cardValueNumber = cardNumber.value;
    const cardValueMonth = expDateMonth.value;
    const cardValueYear = expDateYear.value;
    const cardValueCvc = cvc.value;

    // Card Name
    if(cardValueName === ''){
        showErrorInformation(cardName, 'Cannot be empty!')
    } else if(!lettersOnly(cardName.value)){
        showErrorInformation(cardName, 'Letters only ok?!')
    } else {
        showSuccess(cardName);
    }

    // Card Number
    if(cardValueNumber === ''){
        showErrorInformation(cardNumber, 'Cannot be empty!')
    } else if(cardNumber.value.length < 16 ){
        showErrorInformation(cardNumber, 'Needs 16 numbers ples')
    } else if (!numbersOnly(cardNumber.value)) {
        showErrorInformation(cardNumber, 'Numbers please!')
    }else {
        showSuccess(cardNumber);
    }

    // Card Month
    if(cardValueMonth === ''){
        showErrorInformation(expDateMonth, 'Cannot be empty!')
    } else if(expDateMonth.value.length < 2 ){
        showErrorInformation(expDateMonth, 'Needs 2 numbers ples')
    } else {
        showSuccess(expDateMonth);
    }

    // Card Year
    if(cardValueYear === ''){
        showErrorInformation(expDateYear, 'Cannot be empty!')
    } else if(expDateYear.value.length < 2){
        showErrorInformation(expDateYear, 'Needs 2 numbers ples')
    } else {
        showSuccess(expDateYear);
    }

    // Card CVC
    if(cardValueCvc === ''){
        showErrorInformation(cvc, 'Cannot be empty!')
    } else if(cvc.value.length < 3 ){
        showErrorInformation(cvc, 'Needs 3 numbers ples')
    } else {
        showSuccess(cvc);
    }

    // if everything is true shows the success card and hides the form
    if (cardName.value &&
        cardNumber.value &&
        expDateMonth.value &&
        expDateYear.value &&
        cvc.value) 
        {
            successCard();
        } 
});

// second form to hide the success card and make the first form visible
secondForm.addEventListener('continue', function(e){
    e.preventDefault();

    successInput.style.display = 'none';  
    let dissapear = document.querySelector('.bottom-form');
    dissapear.style.display = 'block';
});

/*
    Functions to update the card details as the user fills them in
*/

// oninput name visual function
function nameInput () {   
    let nameString = 'Jane Appleseed';  
    if (cardName.value === '') {
        nameCards.innerText = nameString;
    } else {
        nameCards.innerText = cardName.value;  
    }
   
}

// Card input visual 
function cardInput() {
    const cardString = '0000 0000 0000 0000';
    if (cardNumber.value === ''){
        numberCards.innerText = cardString;
    } else {
        numberCards.innerText = cardNumber.value;  
    }
}

function dateInput(){
    let monthString = '00';
    if (expDateMonth.value === ''){
        monthCards.innerText = monthString;
    } else {
        monthCards.innerText = expDateMonth.value;  
    }
}

function yearInput(){
    let yearString = '00';
    if (expDateYear.value === ''){
        yearCards.innerText = yearString;
    } else {
        yearCards.innerText = expDateYear.value;  
    }
}

function cvcInput() {
    let cvcString = '000';
    if (cvcCards.value === ''){
        cvcCards.innerText = cvcString;
    } else {
        cvcCards.innerText = cvc.value;  
    }
}