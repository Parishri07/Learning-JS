// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let s = "Happy";
let r = [];
let l = s.length;

for (let i = s.length - 1; i >= 0; i--) {
    r.push(s.charAt(i));
}

// Join the array elements to form a string because just assinging the individual character values doesnot form string in javascript
let reversedString = r.join("");

console.log(s + " " + reversedString);
