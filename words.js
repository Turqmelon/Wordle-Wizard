const wordlist = require('wordlist-english');
const words = wordlist['english'];
let possibilities = words.filter(word => {
    return word.length === 5;
});

const allLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

const reset = () => {
    possibilities = words.filter(word => {
        return word.length === 5;
    });
}

const getPossibilities = () => {
    return possibilities;
}

const isValidLetter = letter => {
    return allLetters.includes(letter);
}

const banLetterInSlot = (letter, slot) => {
    if (!isValidLetter(letter)){
        console.error("Invalid character: " + letter)
        return;
    }
    if (slot < 1 || slot > 5){
        console.error("Illegal slot number")
        return;
    }
    possibilities = possibilities.filter(word => {
        return word.charAt(slot - 1) !== letter;
    });
}

const banLetter = letter => {
    if (!isValidLetter(letter)){
        console.error("Invalid character: " + letter)
        return;
    }
    possibilities = possibilities.filter(word => {
        return word.indexOf(letter) === -1;
    })
}


const hasLetterAnywhere = letter => {
    if (!isValidLetter(letter)){
        console.error("Invalid character: " + letter)
        return;
    }
    possibilities = possibilities.filter(word => {
        return word.indexOf(letter) !== -1;
    })
}

const hasLetterAtSlot = (letter, slot) => {
    if (!isValidLetter(letter)){
        console.error("Invalid character: " + letter)
        return;
    }
    if (slot < 1 || slot > 5){
        console.error("Must be between slot 1 and 5.")
        return;
    }

    possibilities = possibilities.filter(word => {
        return word.charAt(slot - 1) === letter;
    });
}

module.exports = {
    hasLetterAtSlot,
    hasLetterAnywhere,
    reset,
    getPossibilities,
    isValidLetter,
    banLetter,
    banLetterInSlot
}