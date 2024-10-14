// 2.3 Other Basic typescript types
//  Enums ,Any, Unknown, Void, Null, undefined and Never

// Learn about null and undefined  Never

export {} ;
//2.3.1: Enumerations: Kinda Objects
// are use to defined key value pair

enum colors {
    Red = "red",
    white = "#ffffff",
    green = "green",
    }
   // To get the value: colors.Red 
   

   // for numeric Enums: Enums that has numeric values 
   // if you don't define pair then it will start to give number from 0
   // if you define starting number then from that
   
   enum E {
       A = getSomeValue(),
       // Not ts error it's js error .. 
       B = 32 , //rmove 32 and see magic
     // If you don't provide value in non neumeric then face the error
     }

    
   
   
   
//2.3.2: Any
// By default every variable dataType is any 
// make sure that you don't give varialbe as "any" type because if it is then why are you using ts ?
   
   let zero;
   // It variable data type is any cause by default any 
   zero = 1
   zero = "Hello"
   


   //2.3.3: Unknown: Put any value any unkonw type and if you want to change it's data type later so change it
   let g: unknown = 45
    // g datatype = unknown
   g = "Hello"
   // typeof g has changed to string 
   
   if (typeof g === "string") {
       console.log("It's a string");
   } 
   
   let h: unknown = 45
   h = "Hello"
   // typeof f has changed to string 
   h = 43
   
   if (typeof h === "string") {
       console.log("It's a string");
   } else{
         console.log("It's a number");
   }
   
   //2.3.4 Void: for functions 
   // We know that a function can return something or not 
   // if it does'nt return anything then use void(means empty)
   // if return something then write what it returns number , string ...
   
   
   // IN params we define variables formally called params
   function fun1(hello: string): void {
       console.log("hello");
   // not returning anything so use void
   }
   
   fun1()
   
   
   // If function returning anything then tell what it's returning
   function fun2(a: string):Number {
    console.log(a);
    
       return 45
    // return number so use function dataType as number
   }
   fun2("Hello it's ts")
   
   
   // It will return number so instead of void Number return
   function fun6(name:String):Number {
       console.log(name);
       return 5
       
   }
   fun6("Tausif")
   
   
   
   
// Lil bit Related to js functions

function fun3(a:string) {
    console.log(a);
    
}
 fun3("fun will return undefine ")

//  Why it will return undefine  ?

// cause In JS, a function that doesn’t return any value will implicitly return the value undefined
// so if you return something it won't return undefined othrwise will return undefine


function fun4(a:string) {
    console.log(a);

    return a

}
 fun4("Hello , You won't get any retrun undefine ")


//  Lil bit about return Statement 
// Return(Optional staement) statement in JS use for
// 1. exit a function 
// 2. Returns that you want 

// What is null
// 2.3.5 Null: when you find something but don't get then you got null


// 2.3.6:undefined

// 2.3.7: Never: 

function fun5(): never {

    while (true) {
        console.log("Hello");
        
        
    }
    
}
fun5 // fun() don't execute function 
// console will dull  because funtion aage badhega hi nahi loop will keep executing and your cpu case fan will move fast
// Check in task manager
console.log("hely");
