/*
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

function formatDate(date) {
  const newFormat = `${date.getDate()}.${date.getMonth() + 1 < 10 ? "0" : ""}${
    date.getMonth() + 1}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  console.log(newFormat); // Выведет строку в формате "DD.MM.YYYY, HH:mm:ss"
  return newFormat;
}

const date = new Date();
console.log(formatDate(date));
