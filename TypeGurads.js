"use strict";
//  Type gurads and Typescript Utility Types
//  using typeof and instanceof
//  partial , required and readonly
// Type gurads: narrowing the types basically means constrainting(Restrictions) the types
// Union
function fun1(a) {
    // so here a can be string or number
    // Now let's restrict types so that we can use string or number props
    // othewise it won't give props of string/number
    if (typeof a === "string") {
        console.log("It has string");
        // now you can get values of a as string 
        // a. 
    }
    else if (typeof a === "number") {
        console.log("It has number");
        // now you can get values of a as number 
        // a. 
    }
    else {
        // This is how we throw an error
        throw new Error("It has error");
    }
    console.log(a);
}
fun1("It's a string ");
fun1(154);
fun1(null);
