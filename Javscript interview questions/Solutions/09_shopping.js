// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function getRandomDelay(){
  return Math.floor(Math.random() * 5000) + 1000;
}

const placeOrder = async (items) => {
    return new Promise((resolve, reject) => {
        const delay = getRandomDelay();

        setTimeout(() => {
          const orderSuccessful = true;

          if(orderSuccessful){
            let confirmationMessage = `Your order is confirmed! Items: ${items.join(', ')}`
            resolve(confirmationMessage);
          }
          else{
            reject(new Error("Order not placed"));
          }
        }, delay);
    });
}

let itemsToOrder = ['Product 1', 'Product 2', 'Product 3'];

placeOrder(itemsToOrder)
 .then(confirmation => {
    console.log(confirmation);
 })
 .catch(error => {
    console.error("Error: "+ error);
 });