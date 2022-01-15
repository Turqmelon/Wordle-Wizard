# Wordle Wizard
Morning project to assist in solving [Worldle](https://www.powerlanguage.co.uk/wordle/) puzzles.

## Install
1. Clone this repo
2. Run `npm install`
3. Run `node app.js` to launch the app

## Usage
The puzzle will start with every valid English 5 letter word. Through the command line, you'll describe the puzzle results. These commands will narrow down the possibilites to aid your guessing.

## Commands
* `no LETTER` - Removes all word possibilities that contain the given letter
* `no LETTER SLOT` - Removes all word possibilities that have a letter in the given slot (1- 5)
* `has LETTER` - Removes all word possibilities that don't contain this letter anywhere in the word
* `has LETTER SLOT` - Removes all word possibilities that don't have a letter in the given slot (1 - 5)
* `reset` - Reset the puzzle
* `exit` - Quit the program (or use CTRL+C)

## Example
Given the below puzzle:

![Puzzle Example](https://cdn.discordapp.com/attachments/773283503285862460/931978223896637461/unknown.png)

I would interact with the tool in the following way:

### First Row
First, the tool says to try guessing "twang"
* `has t`
* `no t 1`
* `no w`
* `no a`
* `no n`
* `no g`

### Second Row
Then, the tool says to guess "buteo"
* `has b`
* `no b 1`
* `no u`
* `no t 3`
* `has e`
* `no e 4`
* `no o`

### Third Row
Finally, the tool says to guess "DEBIT", which is the answer to solve the puzzle.

Enjoy! Go forth and win Wordle games.
