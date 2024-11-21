"use strict";
// 2. Basic types types 
Object.defineProperty(exports, "__esModule", { value: true });
// 2.1 Primitve types: means basic types that such as  number , string, boolean 
const str = "String";
const num = 43;
const bool = true;
// One TIP
const intro = "Typescript provides typeSafety to JS";
// We declared intro variable in intro.ts so we 
//  Cannot redeclare block-scoped variable
// block-scope means those variable that has block scopes const let ...
// so to get rid of this use var cause it's not block scoped but it's outdated
// so use this: export {};
// https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
// But Why did we got erorr: TypeScript uses the DOM typings for the global execution environment. 
// DOM typings means: TypeScript automatically includes types for common browser APIs
// Window(global object)
// and due to this you are getting error 
