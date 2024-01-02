// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function randomDelay(){
    return Math.floor(Math.random() * 5000) + 1000;
}

const brewCoffee = async (type) => {
   return new Promise((resolve, reject) => {
    let delay = randomDelay();
    
    setTimeout(() => {
        let available = true;

        if(available){
          resolve(`Your coffee: ${type} is ready`);
        }
        else{
          reject(new Error("Error occured"));
        }
    }, delay);
   })
}

let coffeeType = "Latte";
brewCoffee(coffeeType)
 .then(message => {
    console.log(message);
 })
 .catch(error => {
    console.log(error);
 })