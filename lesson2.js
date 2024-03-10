//1 Добавление и удаление элементов:
//Создайте массив с именами пользователей.
//Используйте push для добавления нового пользователя.
//Используйте pop для удаления последнего пользователя.
//Используйте shift и unshift для добавления и удаления пользователя в начале массива.

const users = ["Artur", "Andrei", "Vlad", "Pavel", "Vicktor"];

users.push("Gleb");
console.log(users);

users.pop();
console.log(users);

users.unshift("Sasha");
console.log(users);

users.shift();
console.log(users);

//2 Работа с порядком элементов:
//Критерий для сортировки - возраст. Надо отсортировать по возрастанию.

let users2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 22 },
];

let sortUsers = users2.sort((a, b) => a.age - b.age);
console.log(sortUsers);
