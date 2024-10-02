"use strict";
// 4. Objects and Interfaces
// Defining Object Types
// Interfaces
// Declaring interfaces
// Optional and read-only properties
// Extending interfaces
// Type Aliases
// Difference between Type Aliases and Interfaces
const obj1 = {
    name: "Tausif",
    age: "15kg",
    weight: 50,
    alive: true
};
console.log(obj1.name);
const admin = {
    name: "Tausif",
    age: "15kg",
    weight: 50,
    alive: true,
    country: "India",
    admin: false
    // we got new two types
};
console.log(admin.country);
const obj2 = {
    name: "string",
    age: 14,
    // Both a inteface have merged into each other
};
// so has type number
let c = 47;
function fun2(arg) {
    console.log(arg);
}
fun2("Type is string and can be number");
//  Union(all are acceptable): we can can include anyone
let d = true;
function fun3(a) {
    a.gender,
        a.name,
        a.sleepy;
    // it has intersection of both obj1 and obj3
}
