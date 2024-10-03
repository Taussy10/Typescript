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

// 3. So don't do that isntead


// don't write arguments cause it's keyword so can't use 

// 1.then we spread(we spread each params) params(aka arguments) and put in array 
function fun5(...args:number[]) {
    console.log(args);
    
}
//1. We define arguments(AKA params) 
fun5(3,1,43,23,32)












   



// arrays in typescript
// ts is smart enough to get the types
const heros =  ["Thor" , "Musk" , "Spider man"]
console.log(heros);
  
const array =  ["Thor" , 5 , false]

array.forEach(element => {
    console.log(element , "HEllo");
    
});








export {}