// Variables 

// 
const form = document.getElementById('form');
const cardName = document.getElementById('cardname');
const cardNumber = document.getElementById('cardnumber');
const expDateMonth = document.getElementById('expDateMonth');
const expDateYear = document.getElementById('expDateYear');
const cvc = document.getElementById('cvc');

// 
const numberCards = document.getElementById('numberofcards');
const nameCards = document.getElementById('nameofcards');
const monthCards = document.getElementById('monthcards');
const yearCards = document.getElementById('yearcards');
const cvcCards = document.getElementById('cvcinfo');

// Show Error Function
function showErrorInformation (input, message){
    const inputControl = input.parentElement;
    inputControl.className = 'input-control information error';
    const warning = inputControl.querySelector('.errorWarning')
    warning.innerText = message;
}

// oninput function

function nameInput () {   
    let nameString = 'Jane Appleseed';  
    if (cardName.value === '') {
        return nameCards.innerText = nameString;
    } else {
        return nameCards.innerText = cardName.value;  
    }
   
}

// Card input visual 
function cardInput() {
    let cardString = '0000 0000 0000 0000';
    if (cardNumber.value === ''){
        return numberCards.innerText = cardString;
    } else {
        numberCards.innerText = cardNumber.value;  
    }
}

function dateInput(){
    let monthString = '00';
    if (expDateMonth.value === ''){
        return monthCards.innerText = monthString;
    } else {
        monthCards.innerText = expDateMonth.value;  
    }
}

function yearInput(){
    let yearString = '00';
    if (expDateYear.value === ''){
        return yearCards.innerText = yearString;
    } else {
        yearCards.innerText = expDateYear.value;  
    }
}

function cvcInput() {
    let cvcString = '000';
    if (cvcCards.value === ''){
        return cvcCards.innerText = cvcString;
    } else {
        cvcCards.innerText = cvc.value;  
    }
}
// Event listener function
form.addEventListener('submit', function(e) {    
    e.preventDefault();   

    if (cardName.value === ''){
        showErrorInformation(cardName, 'Error mofo!');
    } 
    
});
