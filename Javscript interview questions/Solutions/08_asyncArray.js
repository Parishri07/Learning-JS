// Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

const multiplyByTwo = async (number) => {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(number * 2);
    }, 500);
    });
};

const asyncArrayMapping = async (arr) => {
    const promises = arr.map(async(number) => {
        return await multiplyByTwo(number);
    });

    return Promise.all(promises);
}
//map method to iterate over each element of the array

let arr = [3, 5, 7, 1, 8 ,2, 4];

asyncArrayMapping(arr)
 .then(resultArray => {
    console.log(resultArray);
 })
 .catch(error =>{
    console.error("Error: " + error);
 })
