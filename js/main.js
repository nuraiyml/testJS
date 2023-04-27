// деструктуризация - особый синтаксис присваивания, при котором можно присвоить массив или обьект сразу нескольким переменным, разбив его на части
// let list = ["Milk", "Sugar", "Salt", "Butter", "Bread"];
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);

// let [first, second, ...other] = list;
// console.log(first, second, other);

// let arr = [
//   [1, 2, 3, 4, 5, [9, 0]],
//   [6, 7, 8, 9, 10],
// ];
// let [[a, b, c, d, e, [nine, zero]], [newArr, ...other]] = arr;
// console.log(a, b, c, d, e, nine, zero, newArr, other);

//! obj
// let person = {
//   age: 30,
//   name: "John",
//   lastName: "Snow",
// };
// let name = person.name;
// let age = person.age;
// let lastName = person.lastName;

// let { age, name, lastName } = person;
// console.log(name, age, lastName);

// let first = {
//   subObj: {
//     name: "Jack",
//   },
// };

// let {
//   subObj: { name },
// } = first;
// console.log(name);

// let obj = {
//   arr: [
//     {
//       name: "Makers",
//     },
//   ],
// };

// let {
//   arr: [{ name }],
// } = obj;
// console.log(name);

//! function
// function foo({ name }) {
//   console.log(name);
// }
// let person = {
//   name: "Makers",
//   surname: "Bootcamp",
//   age: 2,
// };

// foo(person);

// let arr = [1, 2, 3, 4, 5];
// let [, , , four, five] = arr;
// console.log(four, five);

//! spread
// function foo(a, b, c) {
//   console.log(a, b, c);
// }
// let arr = [1, 2, 3, 4, 5];
// foo(...arr);

// let a = {
//   age: 20,
// };

// let b = {
//   age: 20,
// };

// console.log(a === b);

// let obj1 = {
//   name: "Kani",
//   color: "yellow",
// };

// let obj2 = {
//   lastName: "East",
//   // color: "pink",
// };

// let { color } = obj1;
// let newObj = { color, ...obj2 };
// console.log(newObj);

// let obj = {
//   name: "Kani",
//   age: 22,
//   positions: ["mentor", "backend", "frontend", "blogger"],
//   dog: {
//     name: "oreo",
//     age: 2,
//   },
// };

// let { name, age } = obj;

// let {
//   name,
//   age,
//   positions: [firstPosition, secondPosition, ...otherPositons],
//   dog: { name: dogName, age: dogAge },
// } = obj;

// console.log(
//   name,
//   age,
//   firstPosition,
//   secondPosition,
//   otherPositons,
//   dogName,
//   dogAge
// );

// function sayHello({ name, age, dog: { dog: dogName } }) {
//   console.log(`
//  hello my name is ${name}
//  i am ${age} years old
//  i have a dog ${dogName}
//  `);
// }

// sayHello(obj);

//! === classwork ===

//1
// let task1 = ["pervyi", "vtoroy", "tretiy", "chetverty", "dfb", "dsjhh"];
// let [elem1, elem2, elem3, ...arr] = task1;
// console.log(elem1, elem2, elem3);
// console.log(arr);

//2
// let task2 = {
//   name: "petr",
//   lastName: "petrov",
//   age: 20,
// };

// let { name, lastName, age } = task2;
// console.log(name, lastName, age);

//3
// let task3 = ["pervyi", "vtoroy", "tretiy", "chetverty", "dfb", "dsjhh"];
// let [, , , , elem2, elem1] = task3;
// console.log(elem1, elem2);
