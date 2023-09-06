// console.log(document.cookie)
document.cookie = "name=Neil12345"
document.cookie = "id=12345"
document.cookie = "name=Neil"
let key = prompt("Enter your key: ")
let value = prompt("Enter your value: ")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
//encodes the special character so that it does not show error, we can decode it later
console.log(document.cookie)