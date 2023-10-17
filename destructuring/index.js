let arr = [3, 4, 7, 9, 12]

// let [a, b, c, ...rest] = arr
//no need for separating differently
// console.log(a, b, c, rest)

// let [a, ,b, ...rest] = arr
// console.log(a, b, rest)

// const {a, b} = {a:1, b:2}
// console.log(a,b)

// Spread Operator 
// let obj = { ...arr }
// converts the array into key value pairs
// console.log(obj)

// function sum(v1, v2, v3, v4, v5){
//     return v1 + v2 + v3 + v4 + v5
// }
// console.log(sum(...arr))

let obj2 = {
    name: "Kartik Aaryan",
    company: "Company xyz",
    address: "ABC"
}
console.log({ ...obj2, name:"John"})
console.log({ name:"John", ...obj2})
