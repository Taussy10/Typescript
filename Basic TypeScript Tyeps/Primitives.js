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
// are use to defined key value pair
var colors;
(function (colors) {
    colors["Red"] = "red";
    colors["white"] = "#ffffff";
    colors["green"] = "green";
})(colors || (colors = {}));
// get the value: colors.Red 
// for numeric Enums
// if you don't define pair then it will start to give number from 0
// if you define starting number then from that
var E;
(function (E) {
    E[E["A"] = getSomeValue()] = "A";
    // Not ts error it's js error
    E[E["B"] = 32] = "B";
    // If you don't provide value in non neumeric then face the error
})(E || (E = {}));
// Any
// By default dataType value = any
// make sure that you don't have any type has any because if it is then what is the why are you using ts
let zero;
zero = 1;
zero = "Hello";
// Unknown: Put any value any unkonw types but later change to whatver types you want
let g = 45;
g = "Hello";
// typeof g has changed to string 
if (typeof g === "string") {
    console.log("It's a string");
}
let f = 45;
f = "Hello";
// typeof f has changed to string 
f = 43;
if (typeof f === "string") {
    console.log("It's a string");
}
else {
    console.log("It's a number");
}
// Void: for function 
//if function is not returning anything
//then use void(means empty)
// IN params we define variables formally called params
function fun1(hello) {
    console.log("hello");
    // not returning anything so use void
}
fun1();
// If function returning anything then tell what it's returning
function fun2(a) {
    console.log(a);
    return 45;
}
fun2("Hello it's ts");
// Related to js/ts one thing wanna tell you 
// the code is written in 
function fun3(a) {
    console.log(a);
}
fun3("You will get undefine statement");
//  Why is there undefined ?
// cause In JS, a function that doesn’t return any value will implicitly return the value undefined
// so return something it won't show undefined
function fun4(a) {
    console.log(a);
    return a;
}
fun4("Hello , You won't get any retrun undefine ");
// Return(Optional staement) statement in JS use for
// 1. exit a function 
// 2. Returns whatever you want (BTW not console cause it is use for consoling something on screen doesn't have any value)
//  Null: when you want to find but don't get then you got null
let h = null;
// Undefined: If you don't give value to something then undefined
let i;
// Never: a function that will not return something
function fun5() {
    while (true) {
        console.log("Hello");
    }
}
fun5; // fun() don't execute function 
// console will dull  because funtion aage badhega hi nahi loop will keep executing and your cpu case fan will move fast
// Check in task manager
console.log("hely");
