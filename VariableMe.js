"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello bro";
// to be honest here you can avoid typescript because 
// you wlil write only number so ts will detect itself
var number = 45;
// number = "Hello"
var loggedIn = false;
console.log(greetings);
console.log(number);
console.log(loggedIn);
// any keyword: use it when you don't know which dataType will use here
// mostly avoid using because you are using ts for type safety so you should know 
// which type you are gonna use
var hero;
function getHero() {
    return "hero";
}
hero = getHero();
