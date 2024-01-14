let a = ()=>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(456)
        }, 4000);
    })
}

(async ()=>{
    let b = await a();
    console.log(b);
    let c = await a();
    console.log(c);
    let d = await a();
    console.log(d);
})()
//immediately invoked function expressions  
// IIFE is commonly used to encapsulate code and prevent variables and functions from interfering with the global scope. 
// It's a way to create a self-contained module or block of code that runs immediately without leaving any trace in the global scope.
