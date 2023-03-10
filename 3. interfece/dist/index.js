"use strict";
console.log('\n########################## Typescript Interface Declaration & Method and Parameters');
const person = {
    id: 1,
    name: 'John',
    age: 20,
    salary: 1000,
    sayHello() {
        return 'Hello';
    },
    sayWelcome: (name) => {
        return `Welcome ${name}`;
    }
};
person.name = 'John Doe';
console.log(person);
function printPerson(person) {
    console.log(`ID: ${person.id}`);
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Salary: ${person.salary}`);
    console.log(`Say Hello: ${person.sayHello()}`);
    console.log(`Say Welcome: ${person.sayWelcome('Jane')}`);
}
printPerson({ id: 2, name: 'Jane', salary: 2000, age: 30, sayHello: () => 'Hello', sayWelcome: (name) => `Welcome ${name}` });
console.log('\n########################## Typescript Interface Reopen and Usecases');
let settings = {
    theme: true,
    language: 'en',
    sideBar: 'left',
    exteranl: 'http://google.com'
};
console.log('\n########################## Typescript Interface Extend');
let user = {
    id: 1,
    username: 'John',
    country: 'USA',
    role: 1,
    protected: true
};
//# sourceMappingURL=index.js.map