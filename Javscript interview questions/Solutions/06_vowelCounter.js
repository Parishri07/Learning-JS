// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

let str = "KrishnadevRAi";
let lowercaseStr = str.toLowerCase();
let vowels = "aeiou";
let count = 0;

for(let char of lowercaseStr){
    if(vowels.includes(char))
     count++;
}

console.log(count);