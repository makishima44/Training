// 1)У вас есть массив объектов, представляющих информацию о продуктах в магазине. Ваша задача - найти суммарную стоимость всех продуктов в магазине.

//Исходный массив

const products = [
  { id: 1, name: "Телефон", price: 500 },
  { id: 2, name: "Наушники", price: 100 },
  { id: 3, name: "Чехол для телефона", price: 20 },
  { id: 4, name: "Зарядное устройство", price: 30 },
];

let totalCost = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalCost);

//2)У вас есть объект, представляющий информацию о пользователях.Ваша задача - создать массив, содержащий имена пользователей старше 25 лет.

//Исходный объект

const users = {
  1: { name: "Alice", age: 30 },
  2: { name: "Bob", age: 25 },
  3: { name: "Charlie", age: 35 },
};
const userArray = Object.values(users);
const usersOver25 = userArray.filter((u) => u.age > 25).map((u) => u.name);
console.log(usersOver25);

//3)У вас есть два массива с числами. Ваша задача - найти пересечение элементов этих массивов.

//Исходные массивы

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const intersection = array1.filter((el) => array2.includes(el));
console.log(intersection)