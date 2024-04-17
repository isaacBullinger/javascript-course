let calculation = JSON.parse(localStorage.getItem('calculation')) || '';

if (calculation) {
    displayCalculation();
}

function displayCalculation () {
    document.querySelector('.js-display').innerHTML = calculation;
}

function updateCalculation (character) {
    calculation += character;
    localStorage.setItem('calculation', JSON.stringify(calculation));
}