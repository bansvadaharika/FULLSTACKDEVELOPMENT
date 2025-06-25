//datatypes in javascript
//Data types in Javascript incude:

//1. Primitive Types:
//  -Number:Represents both integer and floating-point numbers.
//  -String:Represents a sequence of characters enclosed in single or double quotes.
//  -Boolean:Represents a logical entity and can have two values:True or False.
//  -Undefined:A variable that has been declared but not assigned a value.
//  -Null:Represents the intentionalabsence of any object value.
//  -Symbol:A unique and immutable primitive value,often used as object property keys.
//  -BigInt:Represents integers with arbitary precision,useful for large integers.   

//2. Non-Primitive Types:
//  -Object:A collection of properties,where each property is a key-value pair.
//  -Array:A special type of object used to store ordered collections of values.
//  -Function:A callable object that can be invoked to perform a specific task.

//example of different data types in JavaScript

// Pirmitive data types
let number = 42;//Number
let string = "Hello World";//String
let boolean = true;//Boolean
let undefinedVar;//Undefined //(not assigned a value)
let nullVar = null;//Null
let symbolVar = Symbol("unique");//Synbol //(unique identifier) //(often used as object property keys)
let bigIntVar = BigInt(1234567789012345678901234567890);

// Non-Prmitive datatypes
let objectVar ={key:"value"};
let arrayVar =[1, 2, 3, 4, 5];
let functionVar =function() {return "I am a function";}

let object2={
    //adding multiple key-value pairs
     name:"John Doe",
     age:30,
     isEmpolyed:true,
    hobbies:["reading","gaming","coding"],
}

//output the data types
console.log("Data Types in JavaScript:");
console.log("Number:",number);
console.log("String:",string);
console.log("Boolean:",boolean);
console.log("Undefined",undefinedVar);
console.log("Null:",nullVar);
console.log("Symbol:",symbolVar);
console.log("BigIntVar:",bigIntVar);
console.log("Object:",objectVar);
console.log("Array:",arrayVar);
console.log("Function:",functionVar)