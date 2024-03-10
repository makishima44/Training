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

//3
let events = [
  { name: "Event 1", date: new Date("2024-03-08T10:30:00") },
  { name: "Event 2", date: new Date("2024-03-09T14:00:00") },
  { name: "Event 3", date: new Date("2024-03-07T09:00:00") },
];

let sortEvents = events.sort((a, b) => a.date - b.date);
console.log(sortEvents);

//4 Работа со строками:
// Предположим, у вас есть приложение для управления списком задач, где пользователи могут вводить несколько задач в одну строку, разделяя их запятыми. Вам нужно разбить эту строку на отдельные задачи для обработки и отображения на интерфейсе.

let tasksString = "Помыть посуду, Погулять с собакой, Сделать покупки";
let tasksArray = tasksString.split(",");
console.log(tasksArray);

//4 Объединение используя concat:
//Предположим, у вас есть приложение для управления списками задач, и вы хотите объединить два списка задач в один для удобного отображения на странице.

let todoList1 = ["Покормить кота", "Помыть посуду", "Сделать уроки"];
let todoList2 = ["Погулять с собакой", "Сходить в магазин", "Позвонить маме"];

const todoList3 = todoList1.concat(todoList2);
console.log("Общий список задач: " + todoList3.join(" "));

