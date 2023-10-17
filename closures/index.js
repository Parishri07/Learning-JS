//Closure is a returning a function with its lexical environment

function init(){
    var name = 'Mahi'; //name is a local variable created by the function
    function displayName(){
      //displayName() is an inner function, a closure
      console.log(name); //use variable declared in the parent function
    }
    name = "Sushant";
    return displayName;
}
let c = init();
c()

//Complex example with multiple closures
function returnFunc(){
    const x = () =>{
        let a = 1
        console.log(a)
        const y = () =>{
            let a = 5
            console.log(a)
            const z = () =>{
                let a = 7
                console.log(a)
            }
            z()
        }
        a = 9
        y()
    }
    return x
}

let a = returnFunc()
a()