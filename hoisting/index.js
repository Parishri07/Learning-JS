//Following two lines will get executed without any error due to hoisting

console.log(a)
greet()

function greet(){
    console.log("Have a good day");
}
var a = 10; //Declaration hoisted to the top but initialisation is not
//if we use let or const, hoisting is not done
//while if we use var, hoisting is successful
console.log(a);

//function expression(means using = for function declaration) and class expressions are not hoisted
hello();
let hello = function (){
    console.log("Hello world");
}