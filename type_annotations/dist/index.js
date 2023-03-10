"use strict";
console.log('\n######################### Typescript Type Annotations with Data Types');
let isDone = false;
let age = 20;
let firstName = "John";
let list = [1, 2, 3];
let array = [1, 2, 3, 4, 5];
let x = 4;
let all = [1, "2", true];
let mix = "2";
console.log(isDone, age, firstName, list, array, x);
console.log(typeof mix);
console.log(all);
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log('\n######################### Typescript Type Annotations with Arrays');
let array1 = [1, 2, 3, 4, 5];
let array2 = ['1', '2', '3', '4', '5'];
let array3 = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'];
let array4 = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5', [1, 2, 3, 4, 5]];
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log('\n######################### Typescript Type Annotations with Functions');
function showDetails(name, age, salary) {
    return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}
console.log(showDetails('John', 20, 1000));
console.log('\n######################### Typescript Function Optional Parameters and Default Parameters');
function showDetails1(name, age, salary) {
    return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}
console.log(showDetails1('John', 20, 1000));
console.log('\n######################### Typescript Function Rest Parameters');
function addAll(...nums) {
    let sum = 0;
    nums.forEach(num => {
        sum += num;
    });
    return sum;
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('\n######################### Typescript Type Annotations with Anonymous and Arrow Functions');
const addWithFunction = function (a, b) {
    return a + b;
};
const addWithArrowFunction = (a, b) => {
    return a + b;
};
console.log(addWithFunction(1, 2));
console.log(addWithArrowFunction(1, 2));
//# sourceMappingURL=index.js.map