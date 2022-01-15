const words = require('./words');
const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Wordle Wizard - Start by guessing any 5 letter word.");
console.log("Filter down possibilities with the following commands:")
console.log("\"no <LETTER>\" to remove a letter possibility")
console.log("\"no <LETTER> <SLOT>\" to ban a letter from a specific slot")
console.log("\"has <LETTER>\" to confirm that a letter is within the word")
console.log("\"has <LETTER> <SLOT>\" to confirm that a given letter is at a specific slot")
console.log("\"reset\" to reset everything")
console.log("\"exit\" to quit")

var waitForUserInput = function() {
    const possible = words.getPossibilities();
    if (possible.length === 0){
        console.log("No possibilities left.");
        return;
    }
    console.log("Remaining possibilities:", possible.length > 10 ? possible.length + ' possible words' : possible.join(', '))
    console.log("Try guessing: " + possible[Math.floor(Math.random()*possible.length)])
    rl.question(" ", function(answer) {

        switch(answer){
            case 'exit':
                rl.close();
                return;
            case 'reset':
                words.reset();
                break;
            default: {

                if (answer.startsWith("no")){
                    const inputWords = answer.split(" ");
                    if (inputWords.length === 2){
                        words.banLetter(inputWords[1]);
                    }
                    else if (inputWords.length === 3 && !isNaN(inputWords[2])){
                        words.banLetterInSlot(inputWords[1], parseInt(inputWords[2]));
                    }
                }
                else if (answer.startsWith("has")){
                    const inputWords = answer.split(" ");
                    if (inputWords.length === 2){
                        words.hasLetterAnywhere(inputWords[1]);
                    }
                    else if (inputWords.length === 3 && !isNaN(inputWords[2])){
                        words.hasLetterAtSlot(inputWords[1], parseInt(inputWords[2]));
                    }
                }

                break;
            }
        }

        waitForUserInput();
    });
}
waitForUserInput();