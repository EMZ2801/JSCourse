//1

/*
Ваша задача - создать систему обработки заказов с использованием callback-функций.
Каждый заказ имеет свой уникальный номер, сумму и состояние (выполнен или не выполнен).
Вам нужно реализовать функции для добавления нового заказа, изменения состояния заказа и вывода информации о заказах.

// Объект для хранения заказов
const orders = {};

function addOrder(orderNumber, amount, callback) {
  Если заказа нет - добавить в список заказов с полем completed = false и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказ существует
}

function completeOrder(orderNumber, callback) {
   Если заказ существует - добавить в список заказов с полем completed = true и колбэком вывести результат,
  иначе колбэком вывести сообщение о том, что заказа нет
}

function listOrders(callback) {
  Пройтись по объекту заказов и вывести информацию в виде:
  Заказ #1 - Сумма: 50, выполнен
  Заказ #2 - Сумма: 30, не выполнен

  Сначала отформатируйте каждый заказ в таком виде, затем вызовите колбэк с отформатированным ордер-листом
}

// Использование системы обработки заказов
addOrder(1, 50, (message) => console.log(message));
addOrder(2, 30, (message) => console.log(message));
completeOrder(1, (message) => console.log(message));
listOrders((orderList) => console.log(orderList));
*/

const orders = {};

function addOrder(orderNumber, amount, callback) {
  console.log(`Заказ № ${orderNumber} - сумма:${amount} `);
  if (!orders[orderNumber]) {
    orders[orderNumber] = { amount, completed: false };
    return callback(`Заказ с номером ${orderNumber} добавлен в систему`);
  }
  callback(`Заказ с номером ${orderNumber} уже существует в системе`);
}

function completeOrder(orderNumber, callback) {
  if (orders[orderNumber]) {
    orders[orderNumber] = { completed: true };
    return callback(`Заказ №  ${orderNumber} был выполнен`);
  }
  callback(`Заказ № ${orderNumber} не существует в системе`);
}

function listOrders(callback, ordersObject) {
  for (key in ordersObject) {
    callback(
      `Заказ ${key} - Сумма ${ordersObject[key].amount}, ${ordersObject[key].completed}`
    );
  }
}

function printMessage(massage) {
  console.log(massage);
}

addOrder(1, 30, printMessage);
addOrder(2, 50, printMessage);
completeOrder(1, printMessage);
listOrders(printMessage, orders);

//2
/*
Ваша задача - создать систему для загрузки данных о пользователях из удаленного сервера с использованием промисов.
У вас есть URL сервера, который предоставляет данные о пользователях в формате JSON.
Вам нужно реализовать функцию для загрузки данных и обработать результат.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';

function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(....)
      .then(response => {
       ....
      })
      .then(data => {
        ....
      })
      .catch(error => {
       .....
      });
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then(users => {
    console.log('Данные о пользователях получены:', users);
  })
  .catch(error => {
    console.error('Ошибка при загрузке данных:', error);
  });
 */

const usersDataURL = "https://jsonplaceholder.typicode.com/users";
function loadUserData() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

// Использование промиса для загрузки данных
loadUserData()
  .then((users) => {
    console.log("Данные о пользователях получены:", users);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке данных:", error);
  });

//3
// Переписать loadUserData с помощью async/await

const usersDataURL_new = "https://jsonplaceholder.typicode.com/users";
function loadUserDataNew() {
  return new Promise((resolve, reject) => {
    fetch(usersDataURL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

async function loadUserDataNew() {
  try {
    const response = await fetch(usersDataURL_new);
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Ошибка при загрузке данных:", error);
  }
}
loadUserDataNew();

//4
/*

Ваша задача - создать систему для одновременной загрузки данных о пользователях и их постах с использованием Promise.all.
 У вас есть два URL: один для данных о пользователях, а другой для их постов в формате JSON.
 Вам нужно реализовать функцию для одновременной загрузки обоих наборов данных и обработки результатов.

const usersDataURL = 'https://jsonplaceholder.typicode.com/users';
const postsDataURL = 'https://jsonplaceholder.typicode.com/posts';

function loadUserData() {}
function loadPostsData() {}

Promise.all([loadUserData(), loadPostsData()]) // здесь надо вывести данные в случае успеха и в случае ошибки

Затем то же самое с Promise.race()
*/

const usersDataURL_N = "https://jsonplaceholder.typicode.com/users";
const postsDataURL_N = "https://jsonplaceholder.typicode.com/posts";

async function loadUserData() {
  try {
    const response = await fetch(usersDataURL_N);
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Ошибка загрузки данных: ", error);
  }
}

async function loadPostsData() {
  try {
    const response = await fetch(postsDataURL_N);
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Ошибка загрузки данных: ", error);
  }
}

Promise.all([loadUserData(), loadPostsData()]);
Promise.race([loadUserData(), loadPostsData()]);

//5
/*
Вы - анонимусы, и вам необходимо провести DDos-атаку на https://jsonplaceholder.typicode.com
Раз в полсекунды отправляйте рандомный запрос на сервер (либо /users, либо /posts)
*/

loadUserData_6 = "https://jsonplaceholder.typicode.com/users";
loadPostsData_6 = "https://jsonplaceholder.typicode.com/posts";

async function toAttackServer() {
  const request = [loadUserData_6, loadPostsData_6];
  const random = Math.floor(Math.random() * request.length);
  const response = await fetch(`${request[random]}`);
  console.log(random);
  console.log(response);
}

/* setInterval(toAttackServer, 500) */

//6
/*
console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

setTimeout(() => {
  console.log('3');
  Promise.resolve().then(() => console.log('4'));
}, 0);

Promise.resolve().then(() => {
  console.log('5');
  setTimeout(() => console.log('6'), 0);
});

Promise.resolve().then(() => {
  console.log('7');
});

console.log('8');

Напишите порядок вывода чисел в консоль с ОБЪЯСНЕНИЯМИ ПРИЧИНЫ
*/

console.log("1"); // 1:синхронный вызов - выполнится в первую очередь и сразу выведет 1

setTimeout(() => {
  console.log("2"); //5: microtasts завершились - это macrotasks -  первая по счету макрозадача попадает в stack и пятая в очереди в целом
}, 0);

setTimeout(() => {
  console.log("3"); //6: это macrotasks - вторая по счету макрозадача и шестая в очереди в целом
  Promise.resolve().then(() => console.log("4")); //7: это microtasks в текущей macrotasks - 7 в целом по счету
}, 0);

Promise.resolve().then(() => {
  console.log("5"); //3:  это microtasks - первая по счету микрозадача (promise- then - асинхронная функция/задача) и 3-я по счету
  setTimeout(() => console.log("6"), 0); //8:  это последняя в очереди macrotasks
});

Promise.resolve().then(() => {
  console.log("7"); //4: это microtasks - вторая по счету микрозадача (promise - асинхронная функция) и 4-я по счету
});

console.log("8"); //2: синхронный вызов - выполнится во вторую очередь и сразу выведет 8
//т.е. после исполнения синхронного кода срабатывает очередь микрозадач.
// затем выведется очередь макрозадач.
