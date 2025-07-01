//// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("Hello World");
// },5000);  // 1000 ms -> 1 sec;
// console.log("three");
// console.log("four");

//======================

//  console.log("Hello World");
// function sayHello() {
//     console.log("Hello from sayHello function");
// }
// sayHello();
// console.log("This is a simple JavaScript program");


//======================
//callback example
//  a  callback is a function that is passed as an argument to another function and is executed after the completion of that function.
//  a callback function is a argument that is passed as an argument to another function and is executed after the completion of that function.

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,callback){
//     callback(a,b);
// } 
// calculator(5,10,sum); 
// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });

//======================

// console.log("one");
// console.log("two");
// const hello = ()=>{
//     console.log("Hello World");
// }
// setTimeout(hello, 5000);
// console.log("three");
// console.log("four");

//======================
// nested for loops example
//  for (let i = 0; i < 5; i++) 
//  {
//     let str = "";
//     for (let j = 0; j < 5; j++) 
//     {
//         str += j;
//     }

//     console.log(i,str);
//  }


//======================

// function getData(dataid){ 
//   setTimeout(() => {
//       console.log("Fetching data for id:", dataid);
//   }, 5000);
// }
// getData(1);
// getData(2);
// getData(3);
//==============================================================================
// function getData(dataid, getnextdata) {
//   setTimeout(() => {
//       console.log("Fetching data for id:", dataid);
//       if (getnextdata) {
//           getnextdata();
//       }
//   }, 5000);
// }
// getData(1,()=>{
//     console.log("getting data 2.....")
//     getData(2,()=>{
//         console.log("getting data 3.....")
//         getData(3);
//     });
// });


//=========================================================================
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     setTimeout(() => {
//         const success = false; // Simulate success or failure
//         if (success) {
//             resolve("Data fetched successfully");
//         } else {
//             reject("Error fetching data");
//         }
//     }, 2000);
// });

// myPromise
//     .then((data) => {
//         console.log("Promise resolved with data:", data);
//     })
//     .catch((error) => {
//         console.error("Promise rejected with error:", error);
//     });

//======================================================================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     if (1 > 0) {
//         resolve(123);
//     }
//     reject("Something went wrong");
// });


//======================================================================

//promise states
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: The operation completed successfully
// 3. Rejected: The operation failed
// ======================================================================================================================

function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", dataid);
            resolve("success");
        }, 2000); // Use 2 sec for quicker testing
    });
}
let result=getData(123);
result;
//Chaining multiple data fetches
getData(101)
    .then(result => {
        console.log("First fetch:", result);
        return getData(102);
    })
    .then(result => {
        console.log("Second fetch:", result);
        return getData(103);
    })
    .then(result => {
        console.log("Third fetch:", result);
    })
    .catch(err => {
        console.error("Error occurred:", err);
    });
//==================================================================================================





