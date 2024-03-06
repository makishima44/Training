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

//4 Установите значение по умолчанию для свойства year которого нет в объекте car
//выведите в консоль его

const car = { brand: "Toyota", model: "Camry" };

const { brand, model, year = 2022 } = car;
console.log(brand);
console.log(model);
console.log(year);

//5 Извлечь значения из массива объектов
//и вывести их в консоль

const students = [
  { name: "Alex", grade: "A" },
  { name: "Emma", grade: "B" },
  { name: "Chris", grade: "C" },
];

const [{ name: student1 }, , { name: student3 }] = students;

console.log(student1);
console.log(student3);

//6 Установите значение по умолчанию для свойства age которого нет в объекте person
// и переименовать переменные, чтобы достать значение с свойства firstName
//и вывести результат в консоль

const person2 = { firstName: "Max", lastName: "Johnson" };

const { firstName: name1, lastName: name2, age2 = 25 } = person2;

const firstName = "first Name: Nina";
const lastName = "last Name: Ivanov";

console.log(name1); // 'Max'
console.log(name2); // 'Johnson'
console.log(age2); // 25 (значение по умолчанию)
