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