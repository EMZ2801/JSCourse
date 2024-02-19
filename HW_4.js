//1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true, если функции палиндром. Палиндром - строка, которая читается с конца так же, как и с начала. Условие - должны учитываться только буквы без знаков препинания.

/* f("tenet") // true */
/* f("tenet!") // true */

function chekIsPalindrom(str) {
  str = str.toLowerCase().replaceAll(/[.,!?"';:()-\s]/g, "");
  return str === str.split("").reverse().join("");
}
console.log(chekIsPalindrom("заказ ! шалаш. заказ"));

//2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
// f('Web Development Tutorial'); // "Development"

function getlongesttWords(str) {
  let extraStr = "";
  let lengthOflongestWord = 0;
  let indexOfLongestWord = 0;
  extraStr = str.split(" ");
  for (let i = 0; i < extraStr.length; i++) {
    if (extraStr[i].length > lengthOflongestWord) {
      lengthOflongestWord = extraStr[i].length;
      indexOfLongestWord = i;
    }
  }
  return extraStr[indexOfLongestWord];
}

console.log(getlongesttWords("Web Development Tutorial"));

//3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном порядке. Возвращает новую строку с буквами в алфавитном порядке
/* f("alphabetical");  */ // "aaabcehillpt"

function getAlphabetView(str) {
  let newalphabetStr;
  str = str.toLowerCase().trim().split("").sort();
  newalphabetStr = str.join("");
  return newalphabetStr;
}
console.log(getAlphabetView("aLphabetical"));

/* 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа. 
f('фывфавыапрс'); // 8 */

function isNotRepeated(str) {
  for (let i = 0; i < str.length; i++) {
    let control = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        control = 0;
      }
    }
    if (control) return i;
  }
  return "нет уникального значения";
}

console.log(isNotRepeated("ppdfd"));

/* 5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.
f('Web Development Tutorial')); //9
 */

let quantityVowels = 0;
let vowelsStr = "aeiouy";
function getVowels(str) {
  str = str.toLowerCase().split("");
  vowelsStr = vowelsStr.split("");
  for (let i = 0; i < str.length; i++) {
    for (let y = 0; y < vowelsStr.length; y++) {
      if (str[i] === vowelsStr[y]) {
        quantityVowels = quantityVowels + 1;
      }
    }
  }
  return quantityVowels;
}
console.log(getVowels("WEb Development Tutorial"));
