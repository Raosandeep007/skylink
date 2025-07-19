---
title: "JavaScript Prototypal Inheritance"
publishedAt: "2025-01-15"
summary: "How inheritance works in JavaScript."
---

## JavaScript Prototypal Inheritance

In JavaScript, inheritance is achieved through prototypes. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype.

### Example

Let's look at an example to understand how prototypal inheritance works:

```js
// Define a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Create an instance of Person
const person1 = new Person("Alice", 30);
person1.greet();
// Output: Hello, my name is Alice and I am 30 years old.

// Create another constructor function
function Employee(name, age, jobTitle) {
  Person.call(this, name, age); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Set the prototype of Employee to be an instance of Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a method to the Employee prototype
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Create an instance of Employee
const employee1 = new Employee("Bob", 25, "Developer");
employee1.greet();
// Output: Hello, my name is Bob and I am 25 years old.
employee1.work();
// Output: Bob is working as a Developer.
```

In this example, `Employee` inherits from `Person`. This means that instances of `Employee` have access to the methods defined on `Person.prototype`.

### Conclusion

Prototypal inheritance in JavaScript is a powerful feature that allows objects to inherit properties and methods from other objects. Understanding how it works can help you write more efficient and reusable code.
