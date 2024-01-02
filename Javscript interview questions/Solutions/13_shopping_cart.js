// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(arr){
    let totalCost = 0;

    for(let a of arr){
        totalCost += a['price'] * a.qty;
    }

    return totalCost;
};

arr = [
  {price: 20, qty: 4},
  {price: 30, qty: 1},
  {price: 50, qty: 5}
];

let cost = calculateTotal(arr);
console.log(cost);