"use strict";
// Basic types
let id = 5;
let company = "Travesary";
let isPublished = true;
// Can be anything so if we call below
let x = "Hello";
// Because we set to be anything
x = true;
let age = 5;
age = 30;
let ids = [1, 2, 3, 4, 5];
let arr = [1, "Hello", true];
// Tuple
let person = [1, "Neads", true];
// Tuple Array
let employee;
employee = [
    [1, "Hello"],
    [1, "Two"],
    [1, "Three"]
];
// Union
let pid = 22;
pid = "25";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
const addNum = (x, y) => {
    return x + y;
};
console.log(addNum(1, 2));
const log = (message) => {
    console.log(message);
};
log(2);
const user1 = {
    id: 1,
    name: "John"
};
user1.id = 5;
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
console.log(brad, mike);
console.log(brad.register);
