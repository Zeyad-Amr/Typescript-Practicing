// ######################################################################################################
console.log("\n########################## Typescript Generic Introduction");

/*
Generics
- Generics are used to create reusable components
- You will be able to deal with different types of data without using "Any" type
- You can create: 
    --- Generic Functions
    --- Generic Classes
    --- Generic Interfaces
    --- Generic Methods

*/


function echoString(data: string): string {
    return data;
}

function echoNumber(data: number): number {
    return data;
}

function echoBoolean(data: boolean): boolean {
    return data;
}

function echoAny(data: any): any {
    return data;
}

function echo<T>(data: T): T {
    return data;
}

console.log(echo<string>("Zeyad"));
console.log(echo<number>(1));
console.log(echo<boolean>(true));
console.log(echo<number[]>([1, 2, 3, 4]));



// ######################################################################################################
console.log("\n########################## Typescript Generic Multiple Types");

const echoTypeArrowSyntax = <T>(data: T): T => {
    return data;
};

console.log(echoTypeArrowSyntax<string>("Zeyad"));
console.log(echoTypeArrowSyntax<number>(1));


function testType<T>(data: T): string {
    return `Hello ${data}, and the type is ${typeof data}`;
};

console.log(testType<string>("Zeyad"));
console.log(testType<number>(100));

// multiple types
function testType2<T, U>(data1: T, data2: U): string {
    return `Hello ${data1}, and the type is ${typeof data1} and ${data2}, and the type is ${typeof data2}`;
}

console.log(testType2<string, number>("Zeyad", 100));


// ######################################################################################################
console.log("\n########################## Typescript Generic Classes");

// default type is number if not specified
class User<T = number> {
    constructor(public value: T) { }
    show(msg: T): void {
        console.log(`Hello ${msg}, and the value is ${this.value}`);
    }
}

let userOne = new User<string>("Zeyad");
console.log(userOne.value);
userOne.show("Hello");

// you don't need to specify the type by <Type>
// if you already specified it in the instance
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show(200);


// ######################################################################################################
console.log("\n########################## Typescript Generic and Interfaces");


interface Book {
    id: number;
    title: string;

}

interface Game {
    id: number;
    title: string;
    style: string;
}

class Collection<T>{
    public items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }
}

let books = new Collection<Book>();

books.add({ id: 1, title: "Book One" });
books.add({ id: 2, title: "Book Two" });
console.log(books);
console.log(books.items[0]);

let games = new Collection<Game>();

games.add({ id: 1, title: "Game One", style: "Action" });
games.add({ id: 2, title: "Game Two", style: "Adventure" });
console.log(games);
console.log(games.items[0]);