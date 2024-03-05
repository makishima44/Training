//Задачи для отработки деструктуризации:

//1 Извлечь значения свойств объекта в переменные name, age, city и вывести в консоль эти переменные
const user = { name: "John", age: 25, city: "New York" };

const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);

//2 Извлечь значения из массива в переменные secondFruit, thirdFruit, а первую переменную пропустить
//и вывести в консоль эти переменные
const fruits = ["apple", "banana", "orange"];

const [, secondFruit, thirdFruit] = fruits;
console.log(secondFruit);
console.log(thirdFruit);

//3 Использовать деструктуризацию в параметрах функции

const person = { name: "Alice", age: 30 };

function printPersonDetails({ name, age } = person) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printPersonDetails(person); // Вывод: Name: Alice, Age: 30
