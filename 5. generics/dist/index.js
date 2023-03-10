"use strict";
console.log("\n########################## Typescript Generic Introduction");
function echoString(data) {
    return data;
}
function echoNumber(data) {
    return data;
}
function echoBoolean(data) {
    return data;
}
function echoAny(data) {
    return data;
}
function echo(data) {
    return data;
}
console.log(echo("Zeyad"));
console.log(echo(1));
console.log(echo(true));
console.log(echo([1, 2, 3, 4]));
console.log("\n########################## Typescript Generic Multiple Types");
const echoTypeArrowSyntax = (data) => {
    return data;
};
console.log(echoTypeArrowSyntax("Zeyad"));
console.log(echoTypeArrowSyntax(1));
function testType(data) {
    return `Hello ${data}, and the type is ${typeof data}`;
}
;
console.log(testType("Zeyad"));
console.log(testType(100));
function testType2(data1, data2) {
    return `Hello ${data1}, and the type is ${typeof data1} and ${data2}, and the type is ${typeof data2}`;
}
console.log(testType2("Zeyad", 100));
console.log("\n########################## Typescript Generic Classes");
class User {
    constructor(value) {
        this.value = value;
    }
    show(msg) {
        console.log(`Hello ${msg}, and the value is ${this.value}`);
    }
}
let userOne = new User("Zeyad");
console.log(userOne.value);
userOne.show("Hello");
let userTwo = new User(100);
console.log(userTwo.value);
userTwo.show(200);
console.log("\n########################## Typescript Generic and Interfaces");
class Collection {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
}
let books = new Collection();
books.add({ id: 1, title: "Book One" });
books.add({ id: 2, title: "Book Two" });
console.log(books);
console.log(books.items[0]);
let games = new Collection();
games.add({ id: 1, title: "Game One", style: "Action" });
games.add({ id: 2, title: "Game Two", style: "Adventure" });
console.log(games);
console.log(games.items[0]);
//# sourceMappingURL=index.js.map