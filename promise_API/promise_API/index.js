let p1 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(()=>{
      resolve("Value 1")
    },1000)
})
let p2 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(()=>{
      resolve("Value 2")
    // reject(new Error("I am an error"))
    },2000)
})
let p3 = new Promise(function(resolve,reject){
    console.log("Promise is pending");
    setTimeout(()=>{
      resolve("Value 3")
    },3000)
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })




//METHODS OF PROMISES

let promise_all = Promise.all([p1,p2,p3]);
//even if one promise is rejected, Promise.all wont work. For that we use Promise.allSettled

// let promise_all = Promise.allSettled([p1,p2,p3]);

// let promise_all = Promise.race([p1,p2,p3]);
//prints the fastest, gives error if fastest has error

// let promise_all = Promise.any([p1,p2,p3]);
// prints the fastest fulfilled promise

// let promise_all = Promise.resolve(56);

// let promise_all = Promise.reject(new Error("Hey"));

promise_all.then((value)=>{
    console.log(value);
})

