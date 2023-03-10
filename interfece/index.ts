// ######################################################################################################
console.log('\n########################## Typescript Interface Declaration & Method and Parameters');

/*
Interface
- A interface is a contract that defines the structure of an object.
- It is a way to define the structure of an object.

--- Use With Object ---
--- Use With Function ---
--- Use Readonly and Optional Operator ---
*/

// interface vs type
// interface: can be used to define a structure of an object
// type: can be used to define a structure of an object, union, tuple, etc.
// interface can be extended or reopened, type cannot

interface Person {
    id: number,
    name: string;
    age?: number;
    readonly salary: number;
    sayHello(): string;
    sayWelcome: (name: string) => string;
}

const person: Person = {
    id: 1,
    name: 'John',
    age: 20,
    salary: 1000, 
    sayHello () {
        return 'Hello';
    },
    sayWelcome: (name: string) =>{    
        return `Welcome ${name}`;
    }   
    
}

person.name = 'John Doe';
// person.salary = 2000; // Error: Cannot assign to 'salary' because it is a read-only property.

console.log(person);

function printPerson(person: Person) {
    console.log(`ID: ${person.id}`);
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Salary: ${person.salary}`);
    console.log(`Say Hello: ${person.sayHello()}`);
    console.log(`Say Welcome: ${person.sayWelcome('Jane')}`); 

}

printPerson({id: 2, name: 'Jane', salary: 2000, age: 30, sayHello: () => 'Hello', sayWelcome: (name: string) => `Welcome ${name}`});


// ######################################################################################################
console.log('\n########################## Typescript Interface Reopen and Usecases');

interface Settings {
    theme: boolean;
    language: string;
}

interface Settings {
    sideBar: string;
}

interface Settings {
    exteranl?: string;
}

let settings: Settings = {
    theme: true,
    language: 'en',
    sideBar: 'left',
    exteranl: 'http://google.com'
}


// ######################################################################################################
console.log('\n########################## Typescript Interface Extend');


interface User {  
    id:number;
    username:string;
    country:string;
}


interface Moderator {
    role: number;

}

interface Admin extends Moderator, User {
    protected: boolean ;
}


let user : Admin = {
    id: 1,
    username: 'John',
    country: 'USA',
    role: 1,
    protected: true
}
