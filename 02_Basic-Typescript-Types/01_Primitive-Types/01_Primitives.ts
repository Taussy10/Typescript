// 2. Basic types types 

//2.1  Primitive Types
// string, number, boolean

// 2.2 Refrenced Types
//  Array and Tuple Types
// Typed arrays
// Tuples and their usage
// Enums
// Defining and using Enums
// Any, Unknown, Void, and Never

// 2.3 Type Inference
// How TypeScript infers types
// Type Assertions``
// Using as for type assertions




export {};


// 2.1 Primitve types: means basic types that such as  number , string, boolean 

const str:string = "String"
const num: number = 43;
const bool: boolean = true;







// ONE TIP

const intro: string = "Typescript provides typeSafety to JS"
// We declared intro variable in intro.ts so we 
//  Cannot redeclare block-scoped variable

// block-scope means those variable that has block scopes const let ...
// so to get rid of this use var cause it's not block scoped but it's outdated

// so use this: export {};
// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable

// But Why did we got erorr: TypeScript uses the DOM typings for the global execution environment. 
// DOM typings means: TypeScript automatically includes types for common browser APIs
// Window(global object)
// and due to this you are getting error 












// Arrays   

let arr:number[] = [2 ,3, 3]
// If you are creating one type of array then do it 

// otherwise it can infer by itself that what is type of 
// array items
let arr1 = [1 , "hello" , true , ]

// Tuples: Kind of array that knows
// 1. how many elements it contains
// 2. Which types of it at specific position 
// and if you don't follow both rules will give error

type tuple1 = [string, number];
// We statically fixed that tuple1 will contains 2 elements 
// index 0th: string and 1s: number
function doSomething(tuple2: [string, number]) {
    const a = tuple2[0];
    const b = tuple2[1];
    // const c = tuple2[1]; //will give an error because only 2 indexes
   console.log(a , b);
        
  }
  doSomething(["hello", 42]);
// BTW not only function it can be use on varialbe but as an array
const arr2:[number , boolean] = [33, true] 



// Enums Any , unknonw , void , null , undefined , Never



// Enumerations: Kinda Objects
// are use to defined key value pair

 enum colors {
 Red = "red",
 white = "#ffffff",
 green = "green",
 }
// get the value: colors.Red 

// for numeric Enums
// if you don't define pair then it will start to give number from 0
// if you define starting number then from that

enum E {
    A = getSomeValue(),
    // Not ts error it's js error
    B = 32 , //rmove 32 and see magic
  // If you don't provide value in non neumeric then face the error
  }



// Any
// By default dataType value = any
// make sure that you don't have any type has any because if it is then what is the why are you using ts

let zero;
zero = 1
zero = "Hello"

// Unknown: Put any value any unkonw types but later change to whatver types you want

let g: unknown = 45
g = "Hello"
// typeof g has changed to string 

if (typeof g === "string") {
    console.log("It's a string");
} 

let h: unknown = 45
h = "Hello"
// typeof f has changed to string 
h = 43

if (typeof h === "string") {
    console.log("It's a string");
} else{
      console.log("It's a number");
}

// Void: for function 
//that a function what will it return 
// if nothing thenuse void(means empty)
// if return something then write what it returns number , string ...



// IN params we define variables formally called params
function fun1(hello: string): void {
    console.log("hello");
// not returning anything so use void
}

fun1()


// If function returning anything then tell what it's returning
function fun2(a: string):Number {
 console.log(a);
 
    return 45
}
fun2("Hello it's ts")


// It will return number so instead of void Number return
function fun6(name:String):Number {
    console.log(name);
    return 5
    
}
fun6("Tausif")










// Related to js/ts one thing wanna tell you 
// the code is written in 

function fun3(a:string) {
    console.log(a);
    
}
 fun3("You will get undefine statement")

//  Why is there undefined ?
// cause In JS, a function that doesn’t return any value will implicitly return the value undefined
// so return something it won't show undefined

function fun4(a:string) {
    console.log(a);

    return a

}
 fun4("Hello , You won't get any retrun undefine ")

// Return(Optional staement) statement in JS use for
// 1. exit a function 
// 2. Returns whatever you want (BTW not console cause it is use for consoling something on screen doesn't have any value)





//  Null: when you want to find but don't get then you got null

let j:null = null

// Undefined: If you don't give value to something then undefined

let i: undefined;

// Never: a function that will not return something

function fun5(): never {

    while (true) {
        console.log("Hello");
        
        
    }
    
}
fun5 // fun() don't execute function 
// console will dull  because funtion aage badhega hi nahi loop will keep executing and your cpu case fan will move fast
// Check in task manager
console.log("hely");



