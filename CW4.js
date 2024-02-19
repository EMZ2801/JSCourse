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

function getAverageSum(argument) {
  let isSum = 0;
  let i = 0;
  for (let key in person) {
    if (parseFloat(person[key])) {
      isSum += parseFloat(person[key]);
      i++;
    }
  }
  if (i > 0) {
    return +(isSum / i).toFixed(2);
  } else {
    return "числовые значения объекта отсутствуют";
  }
}
const argument = (person = {
  name: "Pete",
  age: 24,
  salary: 2550,
  street: "Some street",
  houseNum: 52,
});

console.log(getAverageSum(argument))

/*2
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */

    function customAssign(target, source) {
      target = Object.assign(target, source);
      return target;
    }
    const target = {
      name: "Kate",
      age: 30,
    };
    
    const source = {
      firstname: "Ivanov",
      name: "Polina",
      id: "248",
    };
    console.log(customAssign(target, source))


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
  const isNewFormatDate = `${
    date.getDate() + 1 < 10 ? "0" : ""
  }${date.getDate()}.${date.getMonth() + 1 < 10 ? "0" : ""}${
    date.getMonth() + 1
  }.${date.getFullYear()}, ${
    date.getHours() + 1 < 10 ? "0" : ""
  }${date.getHours()}:${
    date.getMinutes() + 1 < 10 ? "0" : ""
  }${date.getMinutes()}:${
    date.getSeconds() + 1 < 10 ? "0" : ""
  }${date.getSeconds()}`;
  console.log(isNewFormatDate); // Выведет строку в формате "DD.MM.YYYY, HH:mm:ss"
  return isNewFormatDate;
}

const date = new Date();
getNewformatDate(date)
