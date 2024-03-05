//Задачи для отработки деструктуризации:

//1 Извлечь значения свойств объекта в переменные name, age, city и вывести в консоль эти переменные
const user = { name: "John", age: 25, city: "New York" };

const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);
