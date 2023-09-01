async function weather(){
   let MumbaiWeather = new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve("28 deg");
     },2000)
   })
   let PuneWeather = new Promise((resolve,reject)=>{
     setTimeout(()=>{
       resolve("32 deg");
     },2000)
   })

   console.log("Loading Mumbai Weather");
   let a = await MumbaiWeather;
   console.log("Mumbai weather: " + a);
   console.log("Loading Pune Weather");
   let b = await PuneWeather;
   console.log("Pune weather: " + b);
   return [a, b];
}
//async function always returns a promise

function rainfall(){
    console.log("There is no rainfall");
}

console.log("Welcome to weather room");
let temp = weather();

rainfall();
//this function does not wait for weather function to get executed completely, it parallely starts executing 
//if we put all these lines of code into another async function, then use await, then it waits till weather function gets executed

temp.then((value)=>{
    console.log(value);
})