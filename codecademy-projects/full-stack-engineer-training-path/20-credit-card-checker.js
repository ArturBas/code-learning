/*
GOAL:
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// Add your functions below:

//Find out if a credit card number is valid or not (Luhn algorithm (see: https://en.wikipedia.org/wiki/Luhn_algorithm#Description) implemented)
const validateCred = (validatedCard) => {
    this.card = validatedCard;
    let checkDigit = this.card[this.card.length - 1];
    const parity = (this.card.length - 2) % 2;
    for(let i = this.card.length - 2; i >= 0; i--) {
        let digit = this.card[i];
        if(i % 2 === parity) {
            digit *= 2;
        }
        if(digit > 9) {
            digit -= 9;
        }
        checkDigit += digit;
    }
    return (checkDigit % 10) === 0;
}

//Check through the nested array for which numbers are invalid, and return another nested array of invalid cards
const invalidCards = [];

const findInvalidCards = (listOfCards) => {
    for(let j = 0; j < listOfCards.length; j++) {
        if(validateCred(listOfCards[j]) === false) {
            invalidCards.push(listOfCards[j]);
        }
    }
    return invalidCards;
}

//Identify the credit card companies that have possibly issued these faulty numbers
let invalidCardsCompanies = [];

const addCompany = (company) => {
    if(!invalidCardsCompanies.includes(company)) {
        invalidCardsCompanies.push(company);
    }
}

const idInvalidCardCompanies = (invalidCard) => {
    for(let k = 0; k < invalidCard.length; k++) {
        switch(invalidCard[k][0]) {
            case 3:
                addCompany('Amex');
                break;
            case 4:
                addCompany('Visa');
                break;
            case 5:
                addCompany('Mastercard');
                break;
            case 6:
                addCompany('Discover');
                break;
            default:
                addCompany('Company not found');                         
        }   
    }
    return invalidCardsCompanies;
}

//Create a function that accepts a string and converts it into an array of numbers

const convertStringToIntegerArray = (string) => {
    return string.split('').map(l => Number(string[l]));
}

//Create a function that will convert invalid numbers into valid numbers
const makeCardValid = (validatedCard) => {
    this.card = validatedCard;
    let checkDigit1 = this.card[this.card.length - 1];
    const parity = (this.card.length - 2) % 2;
    for(let m = this.card.length - 2; m >= 0; m--) {
        let digit1 = this.card[m];
        if(m % 2 === parity) {
            digit1 *= 2;
        }
        if(digit1 > 9) {
            digit1 -= 9;
        }
        checkDigit1 += digit1;
    }
    if(checkDigit1 % 10 !== 0) {
        this.card[this.card.length - 1] += 10 - (checkDigit1 % 10);
    }
    return this.card;
}

//Check correctness of the solutions
console.log(validateCred(valid3));
console.log(validateCred(invalid3));
console.log(validateCred(mystery3));
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(invalidCards));
console.log(convertStringToIntegerArray('4556748996426262'));
console.log(validateCred(makeCardValid(invalid3)));