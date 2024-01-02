// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [2, 4, 6 ,1 ,5 , -9, 7];
let sum = 0;

for(let i of arr){
  if(i<0)
   break;
  sum+=i;
}

console.log(sum);