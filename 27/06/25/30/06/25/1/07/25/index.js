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

// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetching data for id:", dataid);
//             resolve("success");
//         }, 2000); // Use 2 sec for quicker testing
//     });
// }
// let result=getData(123);
// result;
// //Chaining multiple data fetches
// getData(101)
//     .then(result => {
//         console.log("First fetch:", result);
//         return getData(102);
//     })
//     .then(result => {
//         console.log("Second fetch:", result);
//         return getData(103);
//     })
//     .then(result => {
//         console.log("Third fetch:", result);
//     })
//     .catch(err => {
//         console.error("Error occurred:", err);
//     });
//==================================================================================================

// const getpromise= () =>{
//   return  new Promise((resolve,reject) => {
//         console.log("I am a promise");
//        resolve("Promise resolved");
//         reject("Something went wrong");
//     });
// }
// let result = getpromise();
// result
//     .then(data => {
//         console.log(data);
//     });
//    result .catch(error => {
//         console.error("Error occurred:", error);
//     });
// ==================================================================================================
//promise chgaining
/* 
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        }, 2000); // Use 2 sec for quicker testing
    });
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        }, 4000); // Use 4 sec for quicker testing
    });
}
console.log("fetching data 1...");
let p1= asyncFunc1();
p1.then((data)=>{
     console.log("Data fetched:", data);
        console.log("fetching data 2...");
     let p2= asyncFunc2();
     p2.then((data)=>{
         console.log("Data fetched:", data);
     });
}); */


/* function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", id);
            resolve( id);
        }, 1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:", data1);
        const data2 = await getData(102);
        console.log("Second fetch:", data2);
        const data3 = await getData(103);
        console.log("Third fetch:", data3);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

fetchData();


async  function getnextdata() {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
}
getnextdata(); */


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

// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Fetching data for id:", dataid);
//             resolve("success");
//         }, 2000); // Use 2 sec for quicker testing
//     });
// }
// let result=getData(123);
// result;
// //Chaining multiple data fetches
// getData(101)
//     .then(result => {
//         console.log("First fetch:", result);
//         return getData(102);
//     })
//     .then(result => {
//         console.log("Second fetch:", result);
//         return getData(103);
//     })
//     .then(result => {
//         console.log("Third fetch:", result);
//     })
//     .catch(err => {
//         console.error("Error occurred:", err);
//     });
//==================================================================================================

// const getpromise= () =>{
//   return  new Promise((resolve,reject) => {
//         console.log("I am a promise");
//        resolve("Promise resolved");
//         reject("Something went wrong");
//     });
// }
// let result = getpromise();
// result
//     .then(data => {
//         console.log(data);
//     });
//    result .catch(error => {
//         console.error("Error occurred:", error);
//     });
// ==================================================================================================
 //promise chgaining

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         }, 2000); // Use 2 sec for quicker testing
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         }, 4000); // Use 4 sec for quicker testing
//     });
// }
// console.log("fetching data 1...");
// let p1= asyncFunc1();
// p1.then((data)=>{
//      console.log("Data fetched:", data);
//         console.log("fetching data 2...");
//      let p2= asyncFunc2();
//      p2.then((data)=>{
//          console.log("Data fetched:", data);
//      });
// });

// Async/Await syntax
// Async/Await is a way to write asynchronous code that looks synchronous, making it easier to read and maintain.
// It is built on top of Promises and allows you to write asynchronous code in a more linear fashion.

// example of Async/Await

//====================================
/* function getData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data for id:", id);
            resolve( id);
        }, 1000);
    });
}

async function fetchData() {
    try {
        const data1 = await getData(101);
        console.log("First fetch:", data1);
        const data2 = await getData(102);
        console.log("Second fetch:", data2);
        const data3 = await getData(103);
        console.log("Third fetch:", data3);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

fetchData();


async  function getnextdata() {
    console.log("getting data 1.....");
    await getData(1);
    console.log("getting data 2.....");
    await getData(2);
    console.log("getting data 3.....");
    await getData(3);
}
getnextdata(); */
