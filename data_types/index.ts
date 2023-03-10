// ######################################################################################################
console.log('\n########################## Typescript Type Aliases');

type st= string;

let name1: st = 'John';
name1 = 'Jane';
// name1 = 50; // error

type stringOrNumber = string | number;

let age: stringOrNumber = 20;
age = '20';
age = 20;
// age = true; // error


// ######################################################################################################
console.log('\n########################## Typescript Advanced Type Aliases');
// Advanced Types Aliases in Typescript
type Buttons = {
    up: string,
    down: string,
    left: string,
    right: string
}

function getAction(buttons: Buttons) {
    console.log(`Up: ${buttons.up}, Down: ${buttons.down}, Left: ${buttons.left}, Right: ${buttons.right}`);
}

let buttons = {
    up: 'move up',
    down: 'move down',
    left: 'move left',
    right: 'move right'
}

getAction(buttons);

// extending type aliases

type Last =Buttons&{last: boolean};

function getAction2(buttons: Last) {
    console.log(`Up: ${buttons.up}, Down: ${buttons.down}, Left: ${buttons.left}, Right: ${buttons.right}, Last: ${buttons.last}`);
}

let buttons2 = {    
    up: 'move up',
    down: 'move down',
    left: 'move left',
    right: 'move right',
    last: true
}

getAction2(buttons2);


// ######################################################################################################
console.log('\n########################## Typescript Literal Types');
// Literal Types in Typescript

type nums = -1|0|1;

function compare(a: nums, b: nums) :nums{
    if (a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
    return -1;
}

console.log(compare(1, 1));
console.log(compare(1, 0));
console.log(compare(0, 1));

// ######################################################################################################
console.log('\n########################## Typescript Tuple Types');
// Tuple Types in Typescript
/*
- Tuple 
--- Is Another way to represent an array
--- Each element in the tuple has a type and position
--- The position is fixed
--- The length is fixed
--- The type is fixed

*/

type Person = readonly [string, number, boolean];

let person: Person = ['John', 20, true];
person= ['Jane', 20, true];

console.log(person);

// person[0] = 'Jane'; // error

console.log(person);

// destructuring
const [p_name, p_age, p_isMarried] = person;
console.log(p_name, p_age, p_isMarried);


// ######################################################################################################
console.log('\n########################## Typescript Void and Never Types');
/*
- Void
--- Used to represent the absence of a value
--- Function that void can only return undefined
*/

function logging(message: string):void {
    console.log(message);
    return;
}

console.log(logging('Hello World'));

/*
- never 
--- function that never returns
*/

const neverFunc = (message: string) => {
    throw new Error(message);
    // return 10;
}

const neverFunc2 = (message: string):never => {
    while(true) {
        console.log(message);
    }
    // return 10; // error
}


// ######################################################################################################
console.log('\n########################## Typescript Type Enums');

/*
- Enums: Enumeration
--- Used to define a set of named constants
--- Each constant has a name and a value
--- The value can be a number or a string
--- By Default, the value is the index of the constant
--- The index starts from 0
--- The value can be changed
--- Theres a string based enum and a numeric based enum

*/

const easy = 0;
const medium = 1;
const hard = 2;
const Multiplier=(level: number) => level*10;

enum Kids {
    kid=0,
    teen=1,
    adult=2,
    s
}

enum Levels{
    inmpossible,
    easy=Kids.kid, 
    medium=Kids.teen, 
    hard=Kids.adult,
    veryHard=Multiplier(medium),
    // impossible=Multiplier(veryHard) // error
};

let lvl = Levels.veryHard;
if (lvl === Levels.veryHard) {
    console.log(`Level is ${lvl}`);
}


// ######################################################################################################
console.log('\n########################## Typescript Type Assertions');
/*
- Type Assertions
--- Used to override the type inference
--- Used to tell the compiler that we know better
--- TypeScript will not perform any type checking after the assertion
*/


// let myImg = document.querySelector('img') as HTMLImageElement;
// let myImg =<HTMLImageElement> document.querySelector('img');

// console.log(myImg.src);
// console.log(myImg.value); // error


// let data:any = 1000; // error
let data:any = "1000";
console.log((data as string).repeat(3));


// ######################################################################################################
console.log('\n########################## Typescript Union and Intersection Types');

/*
- Union Types
--- | symbol is used to define a union type => "Or"

- Intersection Types
--- & symbol is used to define a intersection type => "And"

--- If a union is OR then intersection is AND
*/

type A={
    one: string,
    two: string

}

type B={
    three: string,
}

type C= A&B;

type D= A|B;

let ccc: C = {
    one: 'one',
    two: 'two',
    three: 'three'
}

let ddd: D = {
 
    three: 'three'
}

let ddd2: D = {
    one: 'one',
    two: 'two',
    three: 'three'
}

let ddd3: D = {
    one: 'one',
    two: 'two',
}


