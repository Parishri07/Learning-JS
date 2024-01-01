// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let pswd = "MyNameIs1234";
let l = pswd.length;

if(l >= 8){
    let ctr = 0;

    for(let i=0; i<l; i++){
        let c = pswd.charCodeAt(i);
        let n = parseInt(c);

        if((n>=48) && (n<=57))
         ctr++;
        if((n>=65) && (n<=90))
         ctr++;
        if((n>=97) && (n<=122))
         ctr++;
    }

    if(ctr >= 3){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
}
