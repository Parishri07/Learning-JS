//The promise constructor has two properties:
//1.state: fulfilled or rejected
//2.result: value when resolved or error when rejected

let p1 = new Promise(function(resolve, reject){
    console.log("Promise is pending")
    setTimeout(()=>{
     resolve(true);
    },3000)
 })
 
 let p2 = new Promise(function(resolve, reject){
     console.log("Promise is pending")
     setTimeout(()=>{
      reject(new Error("I am an error"));
     },3000)
  })
 
 p1.then((value)=>{
     console.log("Hurray")
     return new Promise((resolve,reject) => {
         setTimeout(()=>{
            resolve(4)
         },2000)
     })
 }).then((value) => {
    console.log(value)
 })
 
 // p2.catch((error)=>{
 //     console.log(error)
 // })
 
 p2.then((value)=>{
     console.log(value)
 }, (error)=>{
     console.log(error)
 })
 
 // console.log("Hello One");
 // setTimeout(()=>{
 //     console.log("My name is Anthony Gonzalves Two");
 // },2000)
 // console.log("hello threee");
 
 // console.log(promise);
 //prints that promise is resolved and fulfilled
 
 //fetch google.com homepage => console.log("google.com homepage done")
 //Fetch data from the data api
 //Fetch pictures from server
 //Print downloading
 //Rest of the script