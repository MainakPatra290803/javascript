//---------------setTimeOut------------------------
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// },10000);

// console.log("Three");
// console.log("four");

//---------------CALLBACK-----------------

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b, sumCallBack) {
//     sumCallBack(a,b);
// }
// calculator(1,2,sum);

// calculator(1,2, (a,b) => {
//     console.log(a+b);
// });

//------------CALLBACK HELL --> NESTED CALLBACK-------------------

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,() => {
//     console.log("Getting data 2 ......");
//     getData(2, () => {
//         console.log("Geting data 3 .......");
//         getData(3, () => {
//             console.log("Getting data 4 .......");
//             getData(4);
//         });
//     })
// });

//-------------PROMISES(TO SOLVE CALLBACK HELL PROBLEM)---------------
/*promise---> three states (i)pending
                         (ii)resolve
                        (iii)reject   
 */
// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     resolve("some error");
// });
// let promise = new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     reject("some error!!");
// });

//-----------------------------------------------------------------------

// const getPromise = () =>{
//     return new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error!");
//     });
// };
// //after resolve fullfilment
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled",res);
// });
// // after rejection
// promise.catch((err) => {
//     console.log("rejected",err);
// })

//----------------------PROMISE CHAINING-------------------------------

/**
 * The code defines two asynchronous functions that simulate fetching data and logs the success message
 * after each function completes.
 * @returns The code is returning the strings "some data1", "success", "fetching data2 .....", "some
 * data2", and "success" in the console.
 */
// function asyncFunc1(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     })
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         },4000);
//     })
// };

// console.log("fetching data1 .....");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2 .....");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//     console.log(res);
//     });
// });
//-------------------------------ASYNC-AWAIT----------------------------------
//async function always returns a promise
//await pauses the execution of its surrounding async function until the promise is settled and we can use it inside an async function only
// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// }
// async function getWeatherData(){
//     await api();
// }

