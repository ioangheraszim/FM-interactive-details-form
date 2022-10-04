// Variables 

// 
const form = document.getElementById('form');
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

// Success function

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

// Event listener function
form.addEventListener('submit', function(e) {    
    e.preventDefault();   

    if (cardName.value === '' || cardNumber.value === '' ||
        expDateMonth.value === '' || 
        expDateYear.value === '' || 
        cvc.value === ''){
        showErrorInformation(cardName, 'Cannot be empty!');
        showErrorInformation(cardNumber, 'Cannot be empty!');
        showErrorInformation(expDateMonth, 'Cannot be empty!');
        showErrorInformation(expDateYear, 'Cannot be empty!');
        showErrorInformation(cvc, 'Cannot be empty!');
    } else {
       successCard();
    }
});

// oninput function

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
    let cardString = '0000 0000 0000 0000';
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