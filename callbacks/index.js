//Synchronous programming 
// let a = prompt("What is your name: ");
// let b = prompt("Age: ");
// console.log("Hello "+a+"your age is: "+b);
//order is execution is as specified

//Asynchronous programming
// console.log("Start");
// setTimeout(function() {
//     console.log("I am great") 
// },3000);
// console.log("End");
// initiated but finished later

//Callbacks
function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script");
        callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}
function hello(error, src){
    if(error){
        console.log(error)
        return;
    }
    alert("hello "+src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello);