// Type Inference
// How TypeScript infers types
// Type Assertions
// Using as for type assertions

// Both type asssertion and type casting(converting one tyep from another) is same

// Assertion: Assuming that something is true


export {}

let a: any = 12;
// Here we assert that value is number alothough data type is any
// or instead of any we can write unknown

(a as number).toString
// so we took a as number 
// then we convert into string by string by method(this is called tyepscasting)

// we change the type of a
console.log( typeof a);

// another syntax
(<number>a).toString

// Typecasting can be also done
let b = Number("12")
// awlays write in capital letter
console.log(typeof b);

let c = String(12)
console.log(typeof c , "It is string");

// Non-null assertion operator
let d: null | undefined| number
// Now if you want that d should'nt undefined or null then

d! // then you will get strins value 

