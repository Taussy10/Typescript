// 3. Functions in TypeScript
// Typing Functions
// Defining parameter types and return types
// Optional and Default Parameters
// Rest Parameters
// Function Overloading


// It's a reusable block of code designed to perform a specific task of calculation


// Types:
// 1. Standard 
// will return number

// How to write function with callbacks

function fun1(name:string , (value:string) =>void )  {
    console.log(name);
    
}
fun1("Tausif", (value:string) => {
    console.log(value);
    
})



// In params we write 1.Name of params and 2.Type BTW if there is an array , functio or anything then write only types 
// we have two params 1.name having string types  2nd.callback function  having void type and inside callback function we have it's parms "a" having number type
// in callback we defined type of a 

// and how to write funciton types:  funName: () => void
// BTW void when it doesn't return anything 


function fun2(name:string , callback:(a: number) => void ) {
    // 3. console it
    console.log(name);
    
    // after execution of fun1 then callback execute cause callback is parmas of fun1
    callback(25)
}

// Here we write value of first params and value of 2nd prams and it's params value and consoled it 
// Here we wrote params a in actual function that will execution and that  a:number is just for types
// You can write types of a(a:number) but don't need cause you have alredy defined it in parms 
fun2("Tausif" , (a) => {
    console.log(a);
    
} )



// Hehe just for fun: The more you lenthy function you want can be created 
function fun3(name:string , callback:(a: number , cb1:() => void) => void ) {
    // 3. console it
    console.log(name);
    
    // after execution of fun1 then callback execute cause callback is parmas of fun1
    callback(25 , ()=> {
         console.log("hello");
         
    })
}

// Here we write value of first params and value of 2nd prams and it's params value and consoled it 
// Here we wrote params a in actual function that will execution and that  a:number is just for types
fun3("Tausif" , (a ,cb1 ) => {
    console.log(a);
    cb1()
    
} )





function addToo(num:number ) {
    return num +2 
    
}

addToo(25)


// you can use condition check if you don't want to give value
function getUpperCase(name:string , surName: string ) {
    return name.toUpperCase() + surName
}  

console.log("name", "surName");



// arro fucntion in tys
// The : string after the parameter list indicates
// that the function returns a value of type string.

const getHello = (s: string):string => {
    return s
}

getHello("Hello")





// Rest parameters
// First understand probles

// 2. Then you need a lot of parameters
function fun4(a,b , c , d) {
    console.log("Hello");
    
}
// 1. Imagine you have a lot arguments then 
fun4(1, 3, 23, 32,)

// 3. So don't do that instead us ...rest/spread operator


// don't write arguments cause it's keyword so can't use 

// 1.then we spread(we spread each params) params(aka arguments) and put in array 
function fun5(...args:number[]) {
    console.log(args);
    
}
//1. We define arguments(AKA params) 
fun5(3,1,43,23,32)



// 1. rest(store) it out all of them using rest oprator
// rest operator store them into [array] that's why array data type
function fun6(...num: number[]):void {
    console.log(num);
    // every num will be stored in an array
    
    let sum = 0
    // we made a container where we can store sum
num.forEach(element => {
// will touch each element till the last index 
// and if you want to console you can console it 
// it will each element 

     sum  = sum +  element
    // sum = 0 = 0+ firs index value(32) = 32
    // sum = 32 = 32 + 2nd index value(32) = 64
    // sum = 64 = 64 + 22 = 86
    // keep on 

    // we won't console sum here cause here loop keep moving till the last index completed
       });
console.log(sum , "completed additon");

}

// so we have too many arguments and we want to sum them 
// so 
fun6(32, 32,22, 32,12)


function fun7(...num: number[]):void {
    // every elemnts has stored in an array

    // what do we want ? multipication of each element
    let multi:number = 1;
//  so we want a container where we can store value of mutli
// we can't use 0 cause 0* any number = 0
    num.forEach(val => {
        multi = multi *val
        // multi = 1 = mutli * first index value = 3 = 3*1 = 3
        // 
    });
    
        console.log(multi);

}

fun7(3,2,5,2)


// spread operator: Spread the value of an array
const arr1 = [1,5,3,2]
var arr2 = [...arr1]
// ...arr = 1,5,3,2 then it will store in arr2
console.log(...arr1 , "arr1");
console.log(arr2 , "arr2");



// Function Overloading:Function name can have same but should have diff signature
// This approach allows you to differentiate between the two functions based on the arguments passed.
// function signature: having diff parmater and tyes between two function 

function abcd() {
    
}
function abcd() {
    
}
// Both have same signature 



// We have two fun
function ijkl(a: String): void
// 1st having parms a as string and returning void
function ijkl(a: string , b: number):number 
// 2nd having parms a as string , b as number and  returning number


// we created an big fun combining both ijkl and running using if statemnt
// that if the certain stasified then 1st fun will work and safe fore 2nd fun

function ijkl(a:any , b?: any):void|number {
    // having any so that we can cahgne it later
    // and opitonal b casue 1st fun doesn't have b
    if (typeof a === "string" && b === undefined) {
        // undefined means we tried to search but it doesn't exist
        console.log("first one is working fine ");
        
    }
   else if (typeof a === "string" && typeof b === "number") {
     console.log("2nd fun is working fine ");
     
        return 123
        // for 2nd fun 

    }
    else throw new Error("something is wrong")
    
}
// now we can run both 1st and 2nd fun
ijkl("1st fun")
ijkl("2nd fun" , 32)



// thorw new Error



   









export {}