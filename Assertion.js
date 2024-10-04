"use strict";
// Type Inference
// How TypeScript infers types
// Type Assertions
// Using as for type assertions
Object.defineProperty(exports, "__esModule", { value: true });
let a = 12;
// Here we assert that value is number alothough data type is any
// or instead of any we can write unknown
a.toString;
// so we took a as number 
// then we convert into string by string by method(this is called tyepscasting)
// we change the type of a
console.log(typeof a);
// another syntax
a.toString;
// Typecasting can be also done
let b = Number("12");
// awlays write in capital letter
console.log(typeof b);
let c = String(12);
console.log(typeof c, "It is string");
// Non-null assertion operator
let d;
// Now if you want that d should'nt undefined or null then
d; // then you will get strins value 
