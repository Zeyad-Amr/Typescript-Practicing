"use strict";
console.log('\n########################## Typescript Type Aliases');
let name1 = 'John';
name1 = 'Jane';
let age = 20;
age = '20';
age = 20;
console.log('\n########################## Typescript Advanced Type Aliases');
function getAction(buttons) {
    console.log(`Up: ${buttons.up}, Down: ${buttons.down}, Left: ${buttons.left}, Right: ${buttons.right}`);
}
let buttons = {
    up: 'move up',
    down: 'move down',
    left: 'move left',
    right: 'move right'
};
getAction(buttons);
function getAction2(buttons) {
    console.log(`Up: ${buttons.up}, Down: ${buttons.down}, Left: ${buttons.left}, Right: ${buttons.right}, Last: ${buttons.last}`);
}
let buttons2 = {
    up: 'move up',
    down: 'move down',
    left: 'move left',
    right: 'move right',
    last: true
};
getAction2(buttons2);
console.log('\n########################## Typescript Literal Types');
function compare(a, b) {
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
console.log('\n########################## Typescript Tuple Types');
let person = ['John', 20, true];
person = ['Jane', 20, true];
console.log(person);
console.log(person);
const [p_name, p_age, p_isMarried] = person;
console.log(p_name, p_age, p_isMarried);
console.log('\n########################## Typescript Void and Never Types');
function logging(message) {
    console.log(message);
    return;
}
console.log(logging('Hello World'));
const neverFunc = (message) => {
    throw new Error(message);
};
const neverFunc2 = (message) => {
    while (true) {
        console.log(message);
    }
};
console.log('\n########################## Typescript Type Enums');
const easy = 0;
const medium = 1;
const hard = 2;
const Multiplier = (level) => level * 10;
var Kids;
(function (Kids) {
    Kids[Kids["kid"] = 0] = "kid";
    Kids[Kids["teen"] = 1] = "teen";
    Kids[Kids["adult"] = 2] = "adult";
    Kids[Kids["s"] = 3] = "s";
})(Kids || (Kids = {}));
var Levels;
(function (Levels) {
    Levels[Levels["inmpossible"] = 0] = "inmpossible";
    Levels[Levels["easy"] = 0] = "easy";
    Levels[Levels["medium"] = 1] = "medium";
    Levels[Levels["hard"] = 2] = "hard";
    Levels[Levels["veryHard"] = Multiplier(Levels.medium)] = "veryHard";
})(Levels || (Levels = {}));
;
let lvl = Levels.veryHard;
if (lvl === Levels.veryHard) {
    console.log(`Level is ${lvl}`);
}
console.log('\n########################## Typescript Type Assertions');
let data = "1000";
console.log(data.repeat(3));
console.log('\n########################## Typescript Union and Intersection Types');
let ccc = {
    one: 'one',
    two: 'two',
    three: 'three'
};
let ddd = {
    three: 'three'
};
let ddd2 = {
    one: 'one',
    two: 'two',
    three: 'three'
};
let ddd3 = {
    one: 'one',
    two: 'two',
};
//# sourceMappingURL=index.js.map