import { readFileSync, writeFileSync } from "fs";

const alphabetic = (word) => {
  return /^[a-z]*$/i.test(word);
};

const list_to_string = (list) => {
  let str = "";
  for (let l of list) {
    str += l + "\n";
  }
  return str;
};

try {
  let data = readFileSync("dict.txt", "utf8").split("\n");
  let valid_words = [];
  for (let word of data) {
    if (word.length >= 4 && alphabetic(word.toLowerCase())) {
      valid_words.push(word.toLowerCase());
    }
  }
  writeFileSync("clean.txt", list_to_string(valid_words));
} catch (err) {
  console.error(err);
  exit();
}
