(async function () {
  'use strict';

  async function loadOrder() {
    try {
      const response = await fetch('orders.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const orders = await loadOrder();
  console.log(orders);

  class Order {
    constructor(customer, address, items, email = '', phone = '', birthday = null) {
      this.customer = customer;
      this.address = address;
      this.items = items;

      this.email = email;
      this.phone = phone;
      this.birthday = birthday;
    }

    /*constructor(data) {
      const { customer, address, items, email, phone, birthday } = data;

      this.customer = customer;
      this.address = address;
      this.items = items;

      this.email = email || '';
      this.phone = phone || '';
      this.birthday = birthday;
    }*/

    get total() {
      //let total = 0;
      /*for (let i = 0; i < this.items.length; i++) {
        total += this.items[i].quantity * this.items[i].price;
      }*/
      //this.items.forEach(item => total += item.quantity * item.price);

      //return total;
      return this.items.reduce((total, item) => total + (item.quantity * item.price), 0);
    }

    toHtml() {
      let html = `
        <h2>Order</h2>
        <p>customer: ${this.customer}</p>
        <p>address: ${this.address}</p>
        <h3>Items</h3>
      `;

      //this.items.forEach(item => html += item.toHtml());
      html += this.items.map(item => item.toHtml()).join('<br>');

      return html;
    }

    static fromJSON(data) {
      const items = data.items.map(item => Item.fromJSON(item));
      return new Order(data.customer, data.address, items);
    }
  }

  class Item {
    constructor(name, price, quantity, total) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.total = total;
    }

    /*constructor(data) {
      const { item, total, quantity } = data;

      this.name = item;
      this.price = total;
      this.quantity = quantity;
    }*/

    toHtml() {
      return `
        <p>name: ${this.name}</p>
        <p>quantity: ${this.quantity}</p>
        <p>price: ${this.price}</p>
      `;
    }

    static fromJSON(data) {
      return new Item(data.item, data.total / data.quantity, data.quantity);
    }
  }

  /*function displayItem(item, parent) {
    const itemElement = document.createElement('div');
    itemElement.textContent = `${item.name} (${item.quantity} x $${item.price})`;
    parent.appendChild(itemElement);
  }

  function displayOrder(order) {
    const orderElement = document.createElement('div');

    const customerElement = document.createElement('div');
    customerElement.className = 'customer';
    customerElement.textContent = `${order.customer}`;
    orderElement.appendChild(customerElement);

    const addressElement = document.createElement('div');
    addressElement.className = 'address';
    addressElement.textContent = order.address;
    orderElement.appendChild(addressElement);

    const itemsElement = document.createElement('div');
    order.items.forEach(item => displayItem(item, itemsElement));
    orderElement.appendChild(itemsElement);

    const totalElement = document.createElement('div');
    totalElement.className = 'total';
    totalElement.textContent = `Total: $${order.total}`;
    orderElement.appendChild(totalElement);

    document.body.append(orderElement);
  }*/

  //const theOrders = [];
  /*for(let i = 0; i < orders.length; i++) {
    theOrders.push(new Order(orders[i].customer, orders[i].address, orders[i].items));
  }*/
  //orders.forEach(order => theOrders.push(new Order(order.customer, order.address, order.items)));

  // const theOrders = orders.map(order => new Order(order.customer, order.address, order.items));
  /*const theOrders = orders.map(order => {
    const theItems = order.items.map(item => new Item(item.item, item.total, item.quantity));
    return new Order(order.customer, order.address, theItems);
  });*/


  //const theOrders = orders.map(order => new Order(order));

  const theOrders = orders.map(order => Order.fromJSON(order));

  //theOrders.forEach(order => displayOrder(order));
  document.body.innerHTML = DOMPurify.sanitize(theOrders.map(order => order.toHtml()).join('<hr>'));

  console.log(theOrders);
  console.log(theOrders[1].total);

  //new Order('John', '123 Main St', ['Milk', 'Bread', 'Eggs'], '', '', new Date('1980-01-01'));
  //console.log(new Order({customer: 'John', address: '123 Main St', items: ['Milk', 'Bread', 'Eggs'] , birthday: new Date('1980-01-01')}));

  const milk = new Item('Milk', 3.99, 2, 7.98);
  console.log(milk);


  /*
  orders.forEach(order => {
    const orderElement = document.createElement('div');
    let html = `
      <h2>Order</h2>
      <p>${order.customer}</p>
      <p>${order.address}</p>
    `;

    order.items.forEach(item => {
      html += `
        <p>${item.item}</p>
        <p>${item.quantity}</p>
        <p>${item.total}</p>
      `;
    });

    orderElement.innerHTML = html;
    document.body.appendChild(orderElement);
    */
}());