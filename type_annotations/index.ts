// ######################################################################################################
console.log('\n######################### Typescript Type Annotations with Data Types');
let isDone: boolean = false;
let age: number = 20;
let firstName: string = "John";
let list: number[] = [1, 2, 3];
let array: Array<number> = [1, 2, 3, 4, 5];
let x: any = 4;
let all: (number | string | boolean)[] = [1, "2", true];
let mix: number | string = "2";

console.log(isDone, age, firstName, list, array, x);
console.log(typeof mix);
console.log(all);


function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

// ######################################################################################################
console.log('\n######################### Typescript Type Annotations with Arrays');

let array1: number[] = [1, 2, 3, 4, 5];
let array2: string[] = ['1', '2', '3', '4', '5'];
let array3: (string | number)[] = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5'];
let array4: (string | number | number[])[] = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5', [1, 2, 3, 4, 5]];

console.log(array1)
console.log(array2)
console.log(array3)
console.log(array4)


// ######################################################################################################
console.log('\n######################### Typescript Type Annotations with Functions');

function showDetails(name: string, age: number, salary: number): string {
  // let test =10;
  return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}

console.log(showDetails('John', 20, 1000));

/*

Type Annotations with Functions

- noImplicitAny

- noImplicitReturns
--- will check if all code paths in a function return a value

- noUnusedParameters
--- will check if a function parameter is used

- noUnusedLocals
--- will check if a local variable is used


*/

// ######################################################################################################
console.log('\n######################### Typescript Function Optional Parameters and Default Parameters');

function showDetails1(name: string, age: number, salary?: number): string {

  return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
}

console.log(showDetails1('John', 20, 1000));


console.log('\n######################### Typescript Function Rest Parameters');


function addAll(...nums: number[]): number {
  let sum = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }

  // for (let num of nums) {
  //   sum += num;
  // }

  nums.forEach(num => {
    sum += num;
  });


  return sum;
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// ######################################################################################################
console.log('\n######################### Typescript Type Annotations with Anonymous and Arrow Functions');

const addWithFunction = function (a: number, b: number): number {
  return a + b;
}

const addWithArrowFunction = (a: number, b: number): number => {
  return a + b;
}

console.log(addWithFunction(1, 2));
console.log(addWithArrowFunction(1, 2));


// ######################################################################################################
console.log('\n######################### Typescript Type Annotations with Objects');

let employee: {
  readonly name: string,
  age: number,
  salary: number,
  isMarried: boolean,
  skills: string[],
  childern: {
    one: string,
    two: string,
  }
} = {
  name: 'John',
  age: 20,
  salary: 1000,
  isMarried: false,
  skills: ['HTML', 'CSS', 'JS'],
  childern: {
    one: 'Jane',
    two: 'Jack',
  },
};

// employee.name = 'Jane';
employee.age = 30;

console.log(employee);
console.log(employee.name);
console.log(employee.age);



