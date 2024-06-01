"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToo(num) {
    return num + 2;
}
addToo(25);
// you can use condition check if you don't want to give value
function getUpperCase(name, surName) {
    return name.toUpperCase() + surName;
}
console.log("name", "surName");
// arro fucntion in tys
// The : string after the parameter list indicates
// that the function returns a value of type string.
var getHello = function (s) {
    return s;
};
getHello("Hello");
// ts is smart enough to get the types
var heros = ["Thor", "Musk", "Spider man"];
console.log(heros);
var array = ["Thor", 5, false];
console.log(array);
array.forEach(function (element) {
    console.log(element, "HEllo");
});
