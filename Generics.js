"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we have deined userData in one of files so we need to this otherwise it will give erro
// 7. Generics
// Generic Functions
// Writing functions with generic types
// Generic Classes and Interfaces
// Constraints on Generics
// Default Values for Generics
// Generics means "Shared with something"
// Basically we will create a fun having params then can accept any value
// we can define whatever types we want to a specfic parms
// syntax: T is by conventio 
function fun1(a) {
    console.log("Hello");
}
// In args we write values not the variable(we write it in params)
fun1(1); //either can be written in this way , It's good for understanding 
fun1(1); //either can be written in this way , It's good for understanding
// from args T = number/string
//  from params a:number(T) 
fun1(1); // but don't need cause TS will infer it's types automatically
fun1("Hello ");
const obj1 = {
    name: "Tausif",
    age: 14,
    key: 14
};
console.log(obj1.key);
