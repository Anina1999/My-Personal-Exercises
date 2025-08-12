//solve #1
function analyzePurchases(objectArr, threshold) {
    let total = 0;
    let expensiveItems = [];

    for (let line of objectArr) {
        let price = Number(line.price);
        total += price;

        if (price > threshold) {
            expensiveItems.push(line.item);
        }
    }

    let mostExpensive = [...objectArr].sort((a, b) => b.price - a.price)[0].item;

    return {
        total,
        mostExpensive,
        expensiveItems
    };
}

const purchases = [
  { item: "Laptop", price: 1200 },
  { item: "Mouse", price: 25 },
  { item: "Desk", price: 320 },
  { item: "Chair", price: 150 }
];

let analyze = analyzePurchases(purchases, 100);
console.log(analyze);


// solve #2 (more functional version using methods like reduce, map, filter)
function analyzePurchases(purchases, threshold) {
    const total = purchases
        .map(p => p.price)
        .reduce((sum, price) => sum + price, 0);

    const mostExpensive = purchases
        .slice()
        .sort((a, b) => b.price - a.price)[0].item;

    const expensiveItems = purchases
        .filter(p => p.price > threshold)
        .map(p => p.item);

    return { total, mostExpensive, expensiveItems };
}
