import { readFileSync } from "node:fs";

let trie = {};
let depth = 0;
let words = [];
const letters = process.argv[2].split("");
const necessary = process.argv[3];

function build_trie(data) {
  let temp = trie;

  for (let word of data) {
    if (word.length > depth) {
      depth = word.length;
    }
    for (let i = 0; i < word.length; i++) {
      if (!temp[word[i]]) {
        temp[word[i]] = { word: false };
      }
      temp = temp[word[i]];
      if (i === word.length - 1) {
        temp["word"] = true;
      }
    }
    temp = trie;
  }
}

function is_word(word) {
  let temp = trie;

  for (let i = 0; i < word.length; i++) {
    if (temp[word[i]]) {
      temp = temp[word[i]];
    } else {
      return false;
    }
  }

  return temp.word === true;
}

function has_child(prefix) {
  if (prefix === "") {
    return trie;
  }

  let temp = trie;

  for (let i = 0; i < prefix.length; i++) {
    if (temp[prefix[i]]) {
      temp = temp[prefix[i]];
    } else {
      return false;
    }
  }

  return Object.keys(temp).length > 1 ? temp : false;
}

function find_words(word = "", has_necessary = false) {
  const children = has_child(word);

  if (has_necessary && is_word(word)) {
    words.push(word);
  }

  if (!children) {
    return;
  }

  for (let l of letters) {
    if (children[l]) {
      find_words(word + l, has_necessary || l === necessary);
    }
  }
}

let data;

try {
  data = readFileSync("clean.txt", "utf8").split("\n");
  build_trie(data);
} catch (err) {
  console.error(err);
  exit();
}


find_words();
words.sort((a, b) => b.length - a.length);
console.log(words);
