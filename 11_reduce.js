const simpleShoppingCart = [10, 20, 25, 5, 10];

const shoppingCart = [
  {
    sku: "1234",
    price: 10,
    type: "t-shirt",
  },
  {
    sku: "1233334",
    price: 16,
    type: "tutorial",
  },
  {
    sku: "12111134",
    price: 30,
    type: "tutorial",
  },
];

// .map
// iteratates over array, perform function on each item
// returns new array
// returns same amount of items array

// .filter
// iterates over array, determines what is filtered,
// returns new array
// returns same or less amount of items in array

// . reduce
// iteratates over array, perform specific task
// return one value

const total = simpleShoppingCart.reduce(
  (sub, currentValue) => sub + currentValue
);

console.log("simpleShoppingCart:", simpleShoppingCart);
console.log(total);
