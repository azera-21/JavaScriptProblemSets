/*
Context: The company that you work for suspects that credit card distributors have been 
mailing out cards that have invalid numbers. In this project, you have the role of a clerk 
who checks if credit cards are valid. Every other clerk currently checks using pencil and 
paper, but you’ll be optimizing the verification process using your knowledge of functions 
and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend
 the rest of your time relaxing!
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

// Created validateCred function taking array as parameter
function validateCred(array) {

    // Created a variable 'total' to keep track of the sum of the array
    let total = 0;

    // Looped through the array in reverse based on how long the array is
    for (let i = array.length - 1; i>= 0; i--) {
        // Assigns current value to value of array at index i
        let currentValue = array[i];

        // Checks to see if the nuber is even. This conveniently skips the last number in the array as array.length -1 -i would equal 0 at the end of the array. E.g. array with 15 items would have a length of 15, minus 1 would be 14, but the index of the 15th item would actually be 14 so 14-14 = 0, therefore negates it
        // This also effectivley is equivalent to reversing the array
        if ((array.length -1 - i) % 2 === 1) {
            currentValue *= 2;

            //Captures whether doubled numver is greater than 9
            if (currentValue > 9) {
                currentValue -= 9;
            }
        }

        // Updates total based on previous figures
        total += currentValue;
    }

    return total % 10 === 0; 
}

// Test validateCred function
console.log(validateCred(valid1)); // Prints true
console.log(validateCred(invalid1)); // Prints false


// New function to find invalid cards within batch
function findInvalidCards(nestArray) {
    let invalidCards = [];
    
    // Simply loop through nested array and push to new array created above
    for (let i=0; i < nestArray.length; i++) {
        let currentCard = nestArray[i];
        if (!validateCred(currentCard)) {
            invalidCards.push(currentCard);
        }
    }

    return invalidCards;
}

// Test functions for findInvalidCards
console.log(findInvalidCards([valid1, invalid1, valid2])); // Only prints invalid1
console.log(findInvalidCards(batch)); // Only prints invalid cards within batch

// Create function that returns array of companies from invalid cards
function idInvalidCompanies(invalidCards) {
    let cardCompanies = [];

    for (let i = 0; i < invalidCards.length; i++) {
        switch(invalidCards[i][0]) {
            case 3:
                if (cardCompanies.indexOf("Amex") === -1) {
                    cardCompanies.push("Amex");
                }    
                break;
            case 4:
                if (cardCompanies.indexOf("Visa") === -1) {
                    cardCompanies.push("Visa");
                }  
                break;
            case 5:
                if (cardCompanies.indexOf("Mastercard") === -1) {
                    cardCompanies.push("Mastercard");
                }  
                break;
            case 6:
                if (cardCompanies.indexOf("Discover") === -1) {
                    cardCompanies.push("Discover");
                }  
                break;
            default:
                console.log("Company not found.");
                break;
        }
    }
    
    return cardCompanies;
}

// Test idInvalidCompanies
console.log(idInvalidCompanies(batch)); // Returns 'Visa', 'Mastercard', 'Amex', 'Discover'





