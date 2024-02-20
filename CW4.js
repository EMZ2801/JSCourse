/*1
const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52
}

Создайте функцию, которая выводит среднее арифметическое всех числовых значений объекта и выводит результат в консоль
 */

function getAverageSum(myObject) {
  let summa = 0;
  let quantity = 0;
  for (let key in myObject) {
    if (parseFloat(myObject[key])) {
      summa += parseFloat(myObject[key]);
      quantity++;
    }
  }
  if (quantity > 0) {
    return +(summa / quantity).toFixed(2);
  } else {
    return "числовые значения объекта отсутствуют";
  }
}
const person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
};

console.log(getAverageSum(person));

/*2
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */

function customObjectAssign(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const value = source[key];
        if (value && typeof value === "object") {
          target[key] = customObjectAssign({}, value);
        } else {
          target[key] = value;
        }
      }
    }
  }

  return target;
}
const target = {
  name: "Ann",
  age: 30,
  firstname: "Petrov",
};

const source = {
  firstname: "Ivanov",
  name: "Polina",
  id: "248",
};
console.log(customObjectAssign(target, source));


/*3
//TODO: максимально часто встречающаяся задача на фронте

Необходимо создать функцию formatDate,
которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".

1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
5. Верните отформатированную строку.

Пример использования:

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

Подсказка: Месяцы начинаются с нуля
*/

function getNewformatDate(date) {
  const dateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  for (let key in dateInfo) {
    dateInfo[key] = addFirstZero(dateInfo[key]);
  }

  const newFormatDate = `${dateInfo.day}.${dateInfo.month}.${dateInfo.year}, ${dateInfo.hours}:${dateInfo.minutes}:${dateInfo.seconds}`;

  return newFormatDate;
}
function addFirstZero(number) {
  return number < 10 ? "0" + number : number;
}

const date = new Date();
console.log(getNewformatDate(date));
