// Print Hello and World with 2 seconds time gap
// const a = async (text)=>{
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(text)
//     },2000)
//    })
// }
// (
//     async ()=>{
//         let display = await a("Hello")
//         console.log(display)
//         display = await a("World")
//         console.log(display)
//     }
// )()

// Find average of numbers in array using spread syntax
// let arr = [1,4,6,7,8,2,3]

// function avg(v1,v2,v3,v4,v5,v6,v7){
//     return (v1+v2+v3+v4+v5+v6+v7)/7
// }
// console.log(avg(...arr));

// function to resolve the promise after n seconds, use IIFE to execute a funtion 
let a = async (text, n)=>{
   return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve(text);
     }, n*1000)
   })
}
(
    async ()=>{
     let n = await a("3 seconds later",3);
     console.log(n);
     let m = await a("6 seconds later", 6);
     console.log(m);
     let o = await a("5 seconds later", 5);
     console.log(o);
    }
)()