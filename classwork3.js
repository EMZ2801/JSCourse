//Напишем функцию getTimeOfDay, которая принимает текущий час (от 0 до 23) и возвращает строку,
// указывающую на время суток: утро, день, вечер или ночь.


let nowHours 
function getTimeOfDay (nowHours) {
    if ((nowHours >=0 && nowHours <6) || (nowHours >=20 && nowHours <=23)) {
        return 'сейчас ночь';
    }
     else if (nowHours >=6 && nowHours <12) {
        return 'сейчас утро'
    }
     else if (nowHours >=12  && nowHours <17) {
        return 'сейчас день'
     }
     else if (nowHours >=17  && nowHours <20) {
        return 'сейчас вечер'
     } 
     else {
        return 'неверный формат времени'
     }
}
console.log (getTimeOfDay(8))


// - Написать программу, используя цикл for, которая выводит в консоль числа от 1 до 10.

for (let i = 1; i<=10; i++) {
    console.log (i)
}

// - Написать программу, используя цикл for, которая выводит числа от 1 до 10, прерывая выполнение при достижении числа 7.

for (let i=1; i<=10; i++) {
    if (i == 8) {
        break
    }
    console.log (i)
}

// - Используя цикл while, вывести все четные числа от 1 до 20, пропуская числа, кратные 5.

let i=1

while (i < 20) {
    if (i%5 !== 0  && i%2 == 0) {
        console.log(i);
    }
    i++;
}

/*Создать функцию formatPhoneNumber, которая принимает строку, представляющую номер телефона, и возвращает отформатированную строку.
 formatPhoneNumber("1234567890");
 Вывод: "(123) 456-7890"*/


 let phoneNumber = '0'
 function formatPhoneNumber(phoneNumber) {
    return phoneNumber = '(' + phoneNumber.slice (0, 3) + ')'+ ' ' + phoneNumber.substring (3,6) + '-'+ phoneNumber.substring (6, 4)
    
}
console.log (formatPhoneNumber('1234567890'))
