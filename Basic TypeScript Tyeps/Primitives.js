"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intro = "Typescript provides typeSafety to JS";
//variblename: type = value
// BTW Cannot redeclare block-scoped variable 
// block-scope means those variable that has block scopes const let ...
// so to get rid of this use var cause it's not block scoped but it's outdated
// so use this: export {};
// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
// Why erorr: TypeScript uses the DOM typings for the global execution environment. 
// DOM typings means: TypeScript automatically includes types for common browser APIs
// Window(global object)
// and due to this you are getting error 
// Basic types:   
//  Primitve types: number , string, boolean 
const str = "String";
let Num = 43;
const bool = true;
// Refrence(cause everything happens on parent): () , [] and {}
// eg: 
let a = 2;
let b = a;
let c = b + 8;
console.log(a); // 2
console.log(b); // 2
console.log(c); // 10
// So nothing happens to parent(parent bole to for c , b is parnet and for b , a is parent)
// cause b copied a but a =! b 
let d = [1, 2, 3];
let e = d;
let f = e.splice(e.length - 1, 1); // calcu e lenth and subtract one then remove the last and returns it 
console.log(d); //[1, 2]
console.log(e); //[1, 2]
console.log(f); //[3]
// so here parent elements are getting affected due to child 
// cause b copied(not copied basically it took refrence of parnet) a but a = b 
// that's why called refrence types cause they take refrece of parent not copy it
// Arrays   
let arr = [2, 3, 3];
// If you are creating one type of array then do it 
// otherwise it can infer by itself that what is type of 
// array items
let arr1 = [1, "hello", true,];
// We statically fixed that tuple1 will contains 2 elements 
// index 0th: string and 1s: number
function doSomething(tuple2) {
    const a = tuple2[0];
    const b = tuple2[1];
    // const c = tuple2[1]; //will give an error because only 2 indexes
    console.log(a, b);
}
doSomething(["hello", 42]);
// BTW not only function it can be use on varialbe but as an array
const arr2 = [33, true];
// Enums Any , unknonw , void , null , undefined , Never
// Enumerations: Kinda Objects
var colors;
(function (colors) {
    colors["Red"] = "red";
    colors["white"] = "#ffffff";
    colors["green"] = "green";
})(colors || (colors = {}));
// get the value: colors.Red 