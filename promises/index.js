let promise = new Promise(function(resolve, reject){
    alert("Hello");
    resolve(66);
 })
 
 console.log("Hello One");
 setTimeout(()=>{
     console.log("My name is Anthony Gonzalves Two");
 },2000)
 console.log("hello three");
 
 console.log(promise);
 //prints that promise is resolved and fulfilled
 
 //fetch google.com homepage => console.log("google.com homepage done")
 //Fetch data from the data api
 //Fetch pictures from server
 //Print downloading
 //Rest of the script