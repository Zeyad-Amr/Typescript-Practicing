"use strict";
console.log("\n########################## Typescript Class Type Annotation");
class Person {
    constructor(id, name, salary, age) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.msg = () => `Hi ${this.name}`;
        console.log("User Class Constructor");
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    sayWelcome(name) {
        return `Welcome ${name}`;
    }
}
let userOne = new Person(1, "John", 1000, 30);
console.log(userOne.id);
console.log(userOne.name);
console.log(userOne.salary);
console.log(userOne.age);
console.log(userOne.msg());
console.log(userOne.sayHello());
console.log(userOne.sayWelcome("Zeyad"));
console.log("\n########################## Typescript Class Access Modifiers");
class User {
    constructor(id, name, salary, age) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.msg = () => `Hi ${this.name}`;
        console.log("User Class Constructor");
    }
    sayHello() {
        return `Hello ${this.name} - ${this.id}`;
    }
    sayWelcome(name) {
        return `Welcome ${name}`;
    }
}
let personOne = new User(1, "John", 1000, 30);
console.log(personOne);
console.log(personOne.salary);
console.log(personOne.age);
console.log(personOne.msg());
console.log(personOne.sayHello());
console.log(personOne.sayWelcome("Zeyad"));
console.log("\n########################## Typescript Class Accessors (Getters and Setters)");
class Employee {
    constructor(_id, name, salary, age) {
        this._id = _id;
        this.name = name;
        this.salary = salary;
        this._id = _id;
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.msg = () => `Hi ${this.name}`;
        console.log("User Class Constructor");
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
    sayWelcome(name) {
        return `Welcome ${name}`;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
}
let emp = new Employee(1, "John", 1000, 30);
console.log(emp.id);
emp.id = 2;
console.log(emp.id);
console.log(emp);
console.log(emp.salary);
console.log(emp.age);
console.log(emp.msg());
console.log(emp.sayHello());
console.log(emp.sayWelcome("Zeyad"));
console.log("\n########################## Typescript Class Static Members");
class Test {
    static get count() {
        return this._count;
    }
    static set count(value) {
        this._count = value;
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        Test.count++;
    }
}
Test._count = 0;
let test1 = new Test(1, "John");
let test2 = new Test(2, "Zeyad");
console.log(Test.count);
let test3 = new Test(3, "Ahmed");
console.log(Test.count);
console.log(test1);
console.log(test1.id);
console.log(test2);
console.log(test3);
console.log("\n########################## Typescript Class Implementing Interfaces");
class Account {
    constructor(theme, id, name) {
        this.theme = theme;
        this.id = id;
        this.name = name;
        this.id = 10;
        this.size = 12;
    }
    save() {
        console.log("Save");
    }
}
let account = new Account(true, 1, "John");
console.log(account);
console.log(account.theme);
console.log(account.id);
console.log(account.name);
console.log(account.size);
console.log(account.font);
account.save();
console.log("\n########################## Typescript Abstract Class and members");
class Base {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class Child extends Base {
    constructor(id, name, flag) {
        super(id, name);
        this.id = id;
        this.name = name;
        this.flag = flag;
    }
    save() {
        console.log("Save Child");
    }
}
class Child2 extends Base {
    constructor() {
        super(...arguments);
        this.flag = false;
    }
    save() {
        console.log("Save Child2");
    }
}
let child = new Child(1, "John", true);
let child2 = new Child2(2, "Zeyad");
console.log(child);
console.log(child2);
child.save();
child2.save();
console.log("\n########################## Typescript Polymorphism and Overriding");
class Player {
    constructor(name) {
        this.name = name;
    }
    play() {
        console.log("Play");
    }
}
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.name = name;
        this.spears = spears;
    }
    play() {
        super.play();
        console.log("Play Amazon with spears");
        this.spears--;
    }
}
class Barbarian extends Player {
    constructor(name, axesDurability) {
        super(name);
        this.name = name;
        this.axesDurability = axesDurability;
    }
    play() {
        super.play();
        console.log("Play Barbarian with Axes");
        this.axesDurability--;
    }
}
let amazon = new Amazon("John", 10);
console.log(amazon.name);
amazon.play();
console.log(amazon.spears);
let barbarian = new Barbarian("Zeyad", 100);
console.log(barbarian.name);
barbarian.play();
console.log(barbarian.axesDurability);
//# sourceMappingURL=index.js.map