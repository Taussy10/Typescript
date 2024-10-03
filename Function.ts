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


// we have two params 1.name and 2nd callbacks
// In params we write types so here is 2 types: string and fun
// and how to write funciton types:  funName: () => void
// BTW void when it doesn't return anything 

function fun2(name:string , callbacks:() => void ) {
    console.log(name);
    
}

// Here we write value of name and value of callbacks fun
fun2("Tausif" , () => {
    
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




















   



// arrays in typescript
// ts is smart enough to get the types
const heros =  ["Thor" , "Musk" , "Spider man"]
console.log(heros);
  
const array =  ["Thor" , 5 , false]

array.forEach(element => {
    console.log(element , "HEllo");
    
});








export {}