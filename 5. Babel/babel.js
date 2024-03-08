/* 

⇾ Ex. de Desestruturação de Objetos de ES6+ para ES5+

• ES6+:
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

console.log(`Name: ${name}, Age: ${age}`);

• ES5:

var person = { name: 'Alice', age: 30 };
var name = person.name,
    age = person.age;

console.log("Name: " + name + ", Age: " + age);

⇾ Ex. de Arrow Functions de ES6+ para ES5+

const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('John'));

• ES5:

var greet = function greet(name) {
  return "Hello, " + name + "!";
};

console.log(greet('John'));

⇾ Ex. de Template Strings de ES6+ para ES5+

• ES6+:

const name = 'Bob';
const message = `Hello, ${name}!`;

• ES5:

var name = 'Bob';
var message = "Hello, " + name + "!";

console.log(message);

*/







