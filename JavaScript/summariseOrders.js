function summariseOrders(orders) {
  let result = {};

  for (let order of orders) {
    let customer = order.customer;

    if (!result[customer]) {
      result[customer] = {};
    }

    for (let item of order.items) {
      let product = item.product;
      let quantity = item.quantity;

      
      if (!result[customer][product]) {
        result[customer][product] = 0;
      }

      result[customer][product] += quantity;
    }
  }

  return result;
}

const orders = [
  { id: 1, customer: 'Anna', items: [{ product: 'Blouse', quantity: 2 }, { product: 'Blue', quantity: 3 }] },
  { id: 2, customer: 'Maria', items: [{ product: 'Dress', quantity: 1 }] },
  { id: 3, customer: 'Diana', items: [{ product: 'Hats', quantity: 2 }, { product: 'Yellow', quantity: 1 }] },
];

const summary = summariseOrders(orders);
console.log(summary);
