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
