// ######################################################################################################
console.log("\n########################## Typescript Class Type Annotation");

class Person {
    id: number;
    name: string;
    salary: number;
    age: number;
    msg: () => string;

    constructor(id: number, name: string, salary: number, age: number) {
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
    sayWelcome(name: string) {
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

// ######################################################################################################
console.log("\n########################## Typescript Class Access Modifiers");

/*
Class Access Modifiers
    public: Accessible from anywhere, all members are public by default
    private: Accessible only from within the class, not from outside the class
    protected: Accessible only from within the class and its subclasses

    TypeScript is a layer on top of JavaScript, so it is not possible to hide the data completely.
    It should remove all annotations and although access modifiers are not supported in JavaScript.
*/

class User {
    age: number;
    msg: () => string;

    constructor(
        private id: number,
        protected name: string,
        public readonly salary: number,
        age: number
    ) {
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
    sayWelcome(name: string) {
        return `Welcome ${name}`;
    }
}

let personOne = new User(1, "John", 1000, 30);

// console.log(personOne.id);
// console.log(personOne.name);
// personOne.salary = 2000;
console.log(personOne);
console.log(personOne.salary);
console.log(personOne.age);
console.log(personOne.msg());
console.log(personOne.sayHello());
console.log(personOne.sayWelcome("Zeyad"));

// ######################################################################################################
console.log(
    "\n########################## Typescript Class Accessors (Getters and Setters)"
);

class Employee {
    age: number;
    msg: () => string;

    constructor(
        private _id: number,
        protected name: string,
        public readonly salary: number,
        age: number
    ) {
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
    sayWelcome(name: string) {
        return `Welcome ${name}`;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
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

// ######################################################################################################
console.log("\n########################## Typescript Class Static Members");

class Test {
    private static _count: number = 0;
    public static get count(): number {
        return this._count;
    }
    public static set count(value: number) {
        this._count = value;
    }

    // static getCount(): number {
    //     return Test.count;
    // }

    constructor(public id: number, public name: string) {
        Test.count++;
    }
}

let test1 = new Test(1, "John");
let test2 = new Test(2, "Zeyad");
console.log(Test.count);
let test3 = new Test(3, "Ahmed");

// console.log(Test.count); // Error
console.log(Test.count);
console.log(test1);
console.log(test1.id);
console.log(test2);
console.log(test3);

// ######################################################################################################
console.log(
    "\n########################## Typescript Class Implementing Interfaces"
);
interface Settings {
    theme: boolean;
    font?: string;
    save(): void;
}

class Account implements Settings {
    constructor(public theme: boolean, public id: number, public name: string) {
        // id=50; // no change in id
        this.id = 10;

        this.size = 12;
    }
    font?: string; // optional
    size: number; // required

    save(): void {
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

interface Settings {
    size: number;
}



// ######################################################################################################
console.log(
    "\n########################## Typescript Abstract Class and members"
);

abstract class Base {
    abstract flag: boolean;

    constructor(public id: number, public name: string) { }
    abstract save(): void;
}

class Child extends Base {

    constructor(public override id: number, public override name: string, public flag: boolean) {
        super(id, name);

    }

    // static method must be implemented
    save(): void {
        console.log("Save Child");
    }
}

class Child2 extends Base {
    flag: boolean = false;

    // constructor is not required, it will be added automatically
    // if you don't need to add any attributes or logic to the constructor
    // it's not required to add it

    save(): void {
        console.log("Save Child2");
    }
}

let child = new Child(1, "John", true);
let child2 = new Child2(2, "Zeyad");

console.log(child);
console.log(child2);
child.save();
child2.save();


// ######################################################################################################
console.log(
    "\n########################## Typescript Polymorphism and Overriding"
);

/*
Polymorphism

- Classes Have the same method name but different implementation

- Overriding:
    --- Method in the child class has the same name and signature
     as the method in the parent class

    --- The method in the child class overrides the method in the parent class
     and different implementation

    --- ovrerride keyword is optional, but it's recommended to use it 
     to make sure that you are overriding the method in the parent class
*/


class Player {
    constructor(public name: string) { }

    play(): void {
        console.log("Play");
    }
}

class Amazon extends Player {
    constructor(public override name: string, public spears: number) {
        super(name);
    }

    override play(): void {
        super.play();
        console.log("Play Amazon with spears");
        this.spears--;
    }
}


class Barbarian extends Player {
    constructor(public override name: string, public axesDurability: number) {
        super(name);
    }


    override play(): void {
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