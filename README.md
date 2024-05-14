# New York Times Games Spelling Bee Solver

A solver for the NYTimes game: Spelling Bee. 

`clean.js` cleans an [English word list](https://github.com/dwyl/english-words/blob/master/words.txt) by keeping alphabetic words of at least 4 letters.

`sbee.js` builds a trie with the word list and finds words built with the given letters containing the necessary letter.

## Running the script

First, update the letters and necessary letter by updating lines 6 and 7. Then, run `node ./sbee.js` in the console. 