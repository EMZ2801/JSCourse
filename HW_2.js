// 1
const user = {
    name: "Boris",
    age: 24
}

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age
//решение//
user['firstName'] = 'Ivanov'

delete user.name

console.log (user)

// 2
const fruitContainer = []

// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

fruitContainer.push('apple', 'orange', 'pear')
fruitContainer[1]='apricot'
console.log (fruitContainer)

// 3
/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */

//решение
 let yearsOfService = 5
 let performanceRating = 5
 let yourBonus = 0
 let yourSalary = 1000
 
 if (performanceRating === 4 || performanceRating === 5) {
    if (yearsOfService < 5) {
        yourBonus=yourSalary*0.05
    }
    else {
        yourBonus=yourSalary*0.1
    }

    console.log ('Сотрудник получит бонус ' + yourBonus + ' условных единиц')
 }
 else {
    console.log ('Сотрудник не получает бонус')
 }
 
 const employeeInfo = {
    yearsOfService,
    performanceRating,
    yourBonus,
    yourSalary
 }
 console.log (employeeInfo)

// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]

if (data[2]) {
    console.log("1")        
    // обращение к несуществующему элементу массива - undefined - проверяем след.условие//
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2")        
    //первый операнд составного условия 'и' сразу ложь, т.к.значение ключей age в двух элементах массива (ключах объекта) не равны по типу (число!==строка), проверяем дальше//
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3")
    // второй операнд выдает ложь, т.к. получаемое число 31 больше нуля//
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4")
    //условие выполняется (равенство по типу и значению) => вывод в консоли 4
} else {
    console.log("5")
}

// Что будет выведено в консоли и почему

// 5
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */

    let programmingLanguage = 'JavaScript'
    switch (programmingLanguage) {
        case ('JavaScript'):
            console.log ('JavaScript - отличный выбор для веб-разработки!')
            break
        case ('Python'):
            console.log ('Python - мощный и удобный язык для разработки.')
            break
        case ('Java'):
            console.log ('Java - популярный язык для разработки кросс-платформенных приложений.')
            break
        case ('C++'):
            console.log ('C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.')
            break
        default:
            console.log ('Не выбран язык программирования')

    }