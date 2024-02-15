// 1
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */


 
    let mas = []
    let mas2 = []
   
    function multiplyTable(n) {
      if (Number.isInteger(n) && (n>0)) {
      for (let a = 1; a <= n; a++) {
         for (let b = 1; b <= n; b++) {
             mas.push (a*b)
         }
         mas2 = mas.join (' ');
         console.log (mas2);
         mas = [];
      }
   } else {
      console.log ('введите целое положительное число')
      }
    } 
    (multiplyTable(5))

// 2
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */


  let facTorial = 1
  function calculateFactorial(n) {
     if (Number.isInteger(n) && (n>=0)) {
     for (i=1; i <=n; i++) {
        facTorial = facTorial * i; 
     }
     console.log (facTorial);
     } else {
        console.log ('введите целое неотрицательное число')
     }
  }
  calculateFactorial(5)


//3
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/


function addWithLoss(i, j, n=1) {
   sum = i+j;
   return sum.toFixed(n)
}
console.log(addWithLoss(1.001, 2.002,  ))

//4

/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/

function processText(str) {
   str = str.trim().toLowerCase();
   str = str.replaceAll('a','X');
   return str
}

console.log(processText(' Another example '))

//5

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

 */

 function encode_string (s, key) {
   let code2 = '';
   for (let i=0; i < s.length; i++) {
      let sCode = s.charCodeAt (i)
      code2 += String.fromCharCode(sCode + key)
   }
   return code2
}
console.log (encode_string('Hello, world!',5))

function decode_string(encode_str, key){
   let decode ='';
   for (let i = 0; i < encode_str.length; i++) {
       let sCode = encode_str.charCodeAt(i)
       decode += String.fromCharCode(sCode - key)
   }
   return decode
}
console.log(decode_string('Mjqqt1%|twqi&', 5))