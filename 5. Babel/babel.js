// Ex. de Desestruturação de Objetos de ES6+ para ES5+

// ES6+ 
const person = { name: 'Alice', age: 30 };
const { name, age } = person;

console.log(`Name: ${name}, Age: ${age}`);

// ES5
var person = { name: 'Alice', age: 30 };
var name = person.name,
    age = person.age;

console.log("Name: " + name + ", Age: " + age);
