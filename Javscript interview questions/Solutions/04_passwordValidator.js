// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let password = "MyNameIs1234";

const hasUppercase = /[A-Z]/.test(password); 
const hasLowercase = /[a-z]/.test(password); 
const hasDigit = /\d/.test(password); 
const isLengthValid = password.length >= 8;

if(hasDigit && hasLowercase && hasUppercase && isLengthValid)
 console.log("Valid");
else 
 console.log("Invalid");

// Regular Expressions: /[A-Z]/, /[a-z]/, /\d/
