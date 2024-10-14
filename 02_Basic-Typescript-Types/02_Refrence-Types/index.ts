// 2.2 Refrenced Types
//  Array and Tuple Types
// Typed arrays
// Tuples and their usage
// Enums
// Defining and using Enums
// Any, Unknown, Void, and Never

export {}

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


let f:number[] = e.splice(e.length - 1, 1) // calcu e length(3) and subtract one(3- 1 = 2) then remove the last and returns it 

console.log(d); //[1, 2]
console.log(e); //[1, 2]
console.log(f); //[3]

// so here parent elements are getting affected due to child 

// cause b copied(not copied basically it took refrence of parnet) a but a = b 

// that's why called refrence types cause they take refrece of parent not copy it

