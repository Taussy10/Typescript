// 4. Objects and Interfaces
// Defining Object Types
// Interfaces
// Declaring interfaces
// Optional and read-only properties
// Extending interfaces
// Type Aliases
// Difference between Type Aliases and Interfaces


// What is inteface: In TS it's a way to write types of objects , function and classes 

interface userData {
    name: string,
    age: number|string,
    // union either this or this 
    weight: number,
    alive: boolean,
    // if you define here types of anything then we have to write in in code
    gender?: string
    // for optional
}

const obj1: userData = {
    name: "Tausif",
    age: "15kg",
    weight: 50,
    alive: true 
}
console.log(obj1.name);


// Extending interface: extended the inteface
// we have interface named userdata


interface Admin extends userData {
    // this interface has both userData types
    country: string,
    admin: boolean
    // and admin types
}

const admin: Admin = {
    name: "Tausif",
    age: "15kg",
    weight: 50,
    alive: true,
    country: "India",
    admin: false 
    // we got new two types
}
console.log(admin.country);

// One fun fact

interface a{
    name: string
}


interface a{
    age: number
}

const obj2:a ={
    name: "string",
    age: 14,
// Both a inteface have merged into each other
}

// Aliases: means aka means creating your own types

type hello = number

// so has type number
let c:hello = 47
 
// It is use for creating types like this needs complext types
type val1 = number | string

function fun2(arg:val1) {
    console.log(arg);
    
 }
 fun2("Type is string and can be number")

//  Union(all are acceptable): we can can include anyone
let d: number|string|boolean = true

// Inersection: have both

type obj1 ={
    name: string
}

type obj3 = obj1 & {
    gender: string,
    sleepy: boolean
}

function fun3(a:obj3) {
    a.gender,
    a.name,
    a.sleepy
    // it has intersection of both obj1 and obj3
    
}