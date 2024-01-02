// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

const filterProducts = (products, category, filter) => {
   return products.filter(prod => prod[category] === filter); 
}

let products = [
    { itemName: "Tshirt", colour: "Blue", price: 300 },
    { itemName: "Tshirt", colour: "Black", price: 400 },
    { itemName: "Tshirt", colour: "Purple", price: 350 }, 
    { itemName: "Tshirt", colour: "Blue", price: 500 }
];

let filteredProducts = filterProducts(products, "colour", "Blue");
console.log(filteredProducts);