//1
/*
const students = [
  { name: 'Alice', grades: [85, 90, 92] },
  { name: 'Bob', grades: [78, 80, 75] },
  { name: 'Charlie', grades: [90, 92, 88] },
  { name: 'Anna', grades: [99, 60, 83] },
  { name: 'George', grades: [77, 82, 77] },
  { name: 'Nick', grades: [70, 90, 83] },
];

У вас есть массив `students`, представляющий информацию о студентах.
Каждый элемент массива - объект с полями `name` (имя студента) и `grades` (массив оценок студента).

1. Найдите средний балл каждого студента и добавьте его в объект в виде нового свойства `averageGrade`.
2. Отсортируйте студентов по среднему баллу в убывающем порядке.
3. Используя метод массива, создайте новый массив `topStudents`, содержащий 3 студентов с самыми высокими средними баллами.
*/

const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [78, 80, 75] },
  { name: "Charlie", grades: [90, 92, 88] },
  { name: "Anna", grades: [99, 60, 83] },
  { name: "George", grades: [77, 82, 77] },
  { name: "Nick", grades: [70, 90, 83] },
];

students.forEach((student) => {
  let sumGradeOfStudent = student.grades.reduce(
    (acc, current) => acc + current,
    0
  );
  let averageGradeOfStudent = sumGradeOfStudent / student.grades.length;
  student.averageGrade = +averageGradeOfStudent.toFixed(2);
});
console.log(students);

students.sort((a, b) => b.averageGrade - a.averageGrade);
console.log(students);

const topStudents = [];
for (let i = 0; i < 3; i++) {
  topStudents.push(students[i]);
}
console.log(topStudents);

//2
/*
Давайте создадим собственный кастомный метод массива с именем findAndPush,
который будет выполнять аналогичные действия методам find и push.
Этот метод будет искать заданный элемент в массиве и, если найден, перемещать его в конец массива.
Метод будет возвращать true в случае успешной операции и false в противном случае

Условие: нельзя использовать find и push, любые другие методы можно

Array.prototype.findAndPush = function (searchElement) {// <--- практическое применение прототипа - мы можем создавать свое
 // ваш код
};

// Пример использования
const myArray = [1, 2, 3, 4, 5];

const result = myArray.findAndPush(3);

console.log(result); // true, так как 3 был найден и перемещен
console.log(myArray); // [1, 2, 4, 5, 3]
*/

Array.prototype.findAndPush = function (searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      let index = this.indexOf(searchElement);
      this.splice(index, 1);
      this[this.length] = searchElement;
      console.log(this);
      return true;
    }
  }
  return false;
};

const myArray = [1, 2, 3, 4, 5];
console.log(myArray.findAndPush(5));

//3
/*Создайте функцию, которая принимает две даты в формате объекта `Date`
и возвращает разницу между ними в виде объекта с полями `years`, `months`, `days`, `hours`, `minutes`, `seconds`.

function dateDifference(date1, date2) {
  // Ваш код здесь
}

// Пример использования:
const startDate = new Date(2023, 0, 1, 12, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45

const difference = dateDifference(startDate, endDate);
console.log(difference);
//{
//  years: 1,
//  months: 5,
//  days: 14,
//  hours: 6,
//  minutes: 30,
//  seconds: 45
//}

Подсказка:
    - Используйте методы объекта `Date` для получения разных компонент времени (год, месяц, день, час, минута, секунда).
    - Учтите, что разница в месяцах может быть нецелым числом, поэтому нужно корректно обработать этот случай.
*/

function dateDifference(date1, date2) {
  const yearsDifference = Math.abs(date2.getFullYear() - date1.getFullYear());
  const monthDifference = Math.abs(date2.getMonth() - date1.getMonth());
  const daysDifference = Math.abs(date2.getDay() - date1.getDay());
  const hourDifference = Math.abs(date2.getHours() - date1.getHours());
  const minutesDifference = Math.abs(date2.getMinutes() - date1.getMinutes());
  const secondsDifference = Math.abs(date2.getSeconds() - date1.getSeconds());
  const millisecondsDifference = Math.abs(
    date2.getMilliseconds() - date1.getMilliseconds()
  );

  return {
    years: yearsDifference,
    month: monthDifference,
    days: daysDifference,
    hours: hourDifference,
    minutes: minutesDifference,
    seconds: secondsDifference,
    milliseconds: millisecondsDifference,
  };
}

const startDate = new Date(2023, 0, 1, 12, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45
console.log(startDate, "и ", endDate);
console.log(dateDifference(startDate, endDate));

//4
/*Создайте функцию, которая принимает объект с информацией о студенте и использует деструктуризацию
для извлечения различных данных. Затем выведите эти данные в виде строки.

function printStudentInfo(student) {
  // Ваш код здесь
}

// Пример использования:
const student = {
  name: 'Alice',
  age: 20,
  grade: 'A',
  address: {
    city: 'New York',
    zip: '10001',
  },
  hobbies: ['reading', 'traveling'],
};

printStudentInfo(student);
// Вывод должен быть в формате:
// "Student: Alice, Age: 20, Grade: A, City: New York, Zip: 10001, Hobbies: reading, traveling"
```

Подсказка:
- Используйте деструктуризацию для извлечения данных из объекта студента.
- Можете использовать шаблонные строки для формирования вывода.
 */


const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "traveling"],
};

function printStudentInfo(student) {
  const { name, age, grade, address } = student;
  const [reading, traveling] = student.hobbies;
  return `Student: ${name}, Age: ${age}, Grade: ${grade}, City: ${address.city}, Zip: ${address.zip}, Hobbies: ${reading}, ${traveling}`;
}

console.log(printStudentInfo(student));


//5
/*
Вот ваша первая задача из первой домашки:
const user = {
    name: "Boris",
    age: 24
}

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

В основном вы ее делали так:
user.firstName = user.name
delete user.name

По итогу у вас получался объект следующего вида:

const user = {
    age: 24
    firstName: "Boris",
}

Внимание, задача: создать новый объект newUser (программно), чтобы на выходе получилось следующее:

const user = {
    name: "Boris",
    age: 24
}

const newUser = ...// ваш код

console.log(newUser) // {firstName: "Boris", age: 24}

*/

const user = {
  name: "Boris",
  age: 24,
};

const { name: firstname, age } = user;

const newUser = { firstname, age };

console.log(newUser);