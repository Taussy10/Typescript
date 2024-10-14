// 2.2 Refrenced Types
//  Array 
// Tuples 

export {}


// // Practice array and objects you are not good at this and complete this file also understand refrence types


// Refrence(cause everything happens on parent): () , [] and {}



// 2.2: Understand what is refrence data type

// value copying in primitives data types
let a:number = 2;
let b:number = a;
// we gave value a to b 

let c:number = b + 8;
// so b has a=2 so should be c = 10 .. basic maths 
// So in primtives we copy values
console.log(a); // 2
console.log(b); // 2
console.log(c); // 10


// So nothing happens to parent(parent bole to for c , b is parent and for b , a is parent)
// cause b copied a but a =! b 


// Value copying in Refrence data typs 
let d:number[] = [1, 2, 3]
let e:number[] = d
// So according to logic e = [1,2,3] 

// splice method takes indexes 
let f:number[] = e.splice(e.length - 1, 1) // calcu e length(3) and subtract one(3- 1 = 2nd index) then remove the 1 elemnt and returns it 

console.log(d); //[1, 2]
console.log(e); //[1, 2]
console.log(f); //[3]

// so here parent elements are getting affected due to child 

// cause b copied(not copied basically it took refrence of parnet) a but a = b 

// that's why called refrence types cause they take refrece of parent not copy it


// JS concpets
// console.log() is method(log is function in console named array)
// hello.hehe is proprty(hehe is property in array named hehe)




// 2.2.1  Arrays types  

let arr:number[] = [2 ,3, 3]
// If you are creating one type of array then do this 

// If an array has more than one data types values then  it can infer by itself that 
// what is type of each array items
let arr1 = [1 , "hello" , true , ]


// 2.2.2 Tuple Types  

// Tuples: Kinda array that knows
// 1. how many elements an array contains
// 2. Which type of arrayItesm and at what position 

// and if you don't follow both rules then it will give error

// Tuple on variables 
const arr2:[number , boolean] = [33, true] 
// arr2 0th index:number , 1st index: boolean and will take only 2 values



// tuples in function

type tuple1 = [string, number];
// BTW about "type" will talk about later  
// We statically defined that tuple1 will contains 2 elements 
// index 0th: string and 1s: number


function fun1(tuple2: [string, number]) {
    const a = tuple2[0];
    // a in tuple2 0th index
    const b = tuple2[1];
    // const c = tuple2[1]; //will give an error because only 2 indexes
   console.log(a , b);
        
  }

// execute the functin
  fun1(["hello", 42]);
  









