//1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true, если функции палиндром. Палиндром - строка, которая читается с конца так же, как и с начала. Условие - должны учитываться только буквы без знаков препинания. 

/* f("tenet") // true */
/* f("tenet!") // true */


function isPalinmrom(str) {
    str = str.toLowerCase().
    replaceAll(',', '').
    replaceAll('!', '').
    replaceAll('?', '').
    replaceAll('.', '').
    replaceAll('-', '').
    replaceAll(/\s/g,'');
    return str ===str.split('').reverse().join('');
 }
 
 console.log(isPalinmrom('Заказ  ! шалаш? заказ.')) 


//2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
// f('Web Development Tutorial'); // "Development"


let str2='';
let longestWords = 0;
let iMax=0;
function islongesttWords(str1) {
   str2 = str1.split(' ')
   for (let i=0; i<str2.length; i++) {
      if (str2[i].length > longestWords) {
         longestWords = str2[i].length;
         iMax = i;
      }
   }
}

islongesttWords('Web Development Tutorial ');
console.log (str2[iMax])


//3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном порядке. Возвращает новую строку с буквами в алфавитном порядке
/* f("alphabetical");  */// "aaabcehillpt"

let str2
function isAlphabetView(str) {
   str = str.toLowerCase().trim().split('').sort();
   str2 = str.join('');
}
isAlphabetView('aLphabetical')
console.log (str2)

/* 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого неповторяющегося символа. 
f('фывфавыапрс'); // 8 */

function isNotRepeated(str) {
    for (let i = 0; i < str.length; i++) {
      let control = 1;
      for (let i2 = 0; i2 < str.length; i2++) {
        if (str[i] === str[i2] && i !== i2) {
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

let calc = 0;
let str2='aeiouy';
function getVowels(str) {
   str=str.toLowerCase().split('')
   str2=str2.split('');
   console.log(str,str2)
   for (let i=0; i<str.length; i++) {
      for (let i2=0; i2<str2.length; i2++) {
         if (str[i]===str2[i2]) {
            calc = calc +1;
         }
      }
   }
   return calc;
}
console.log(getVowels('WEb Development Tutorial'))