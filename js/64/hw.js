(function () {
  'use strict';

  /*const account1 = {
    balance: 1000
  };

  const account2 = {
    balance: 2000
  };*/

  function transaction(amount) {
    this.balance += amount;
  }

  function createAccount(openingBalance) {
    console.log(this);
    return {
      balance: openingBalance,/*
      performTransaction: function(amount) {
        this.balance += amount;
      }*/
      performTransaction: amount => this.balance += amount
    };
  }

  const account1 = createAccount(1000);
  const account2 = createAccount(2000);

  //transaction(100);
  transaction.call(account1, 100);
  transaction.call(account1, -10);

  transaction.apply(account2, [100]);
  transaction.apply(account2, [-10]);


  account1.performTransaction(100);
  /*account1.performTransaction(-10);

  account2.performTransaction(100);
  account2.performTransaction(-10);*/

  const transactOnAccount1 = transaction.bind(account1);
  transactOnAccount1(100);

  const withdraw5FromAccount2 = transaction.bind(account2, -5);
  withdraw5FromAccount2();
  withdraw5FromAccount2();

  console.log(account1, account2);
}());