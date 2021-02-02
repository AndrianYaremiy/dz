const account = {
  owner: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["order-1", "order-2", "order-3"],
  changeDiscount(value) {
      this.discount = value;
  },
  showOrders() {
      return this.oreders;
   },
   addOrder(cost, oreder) {
       this.balance -= cost;
       this.orders.punsh(oreder);
   },
  };

  account.changeDiscount(0.15);
  console.log(account.discount); // 0.15

  console.table(account.showOrders()); // ['oreder-1', 'oreder-2', 'oreder-3']

  account.addOrder(5000, "oreder-4");
  console.log(account.balance); // 19000
  console.table(account.showOrders()); // ['oreder-1', 'oreder-2', 'oreder-3', 'oreder-4']