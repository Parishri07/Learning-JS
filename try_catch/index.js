setTimeout(()=>{
    console.log("Hello");
},2000)

try{
    console.log(Neil);
}
catch(error){
    console.log(error);
}
//if exception happens in scheduled code like in setTimeout, then try.. catch wont catch it

setTimeout(()=>{
    console.log("Good morning");
},2000)
setTimeout(()=>{
    console.log("Good afternoon");
},2000)
setTimeout(()=>{
    console.log("Good evening");
},2000)
setTimeout(()=>{
    console.log("Good night");
},2000)