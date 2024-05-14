# New York Times Games Spelling Bee Solver

A solver for the NYTimes game: Spelling Bee. 

`clean.js` cleans an [English word list](https://github.com/dwyl/english-words/blob/master/words.txt) by keeping alphabetic words of at least 4 letters.

`sbee.js` builds a trie with the word list and finds words built with the given letters containing the necessary letter.

## Running the script

Run `node sbee <all_letters> <necessary_letter>` in the console. For example, for the May 14, 2024 puzzle, you would type `node sbee humidef d`.