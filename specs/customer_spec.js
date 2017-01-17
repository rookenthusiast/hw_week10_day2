var shoppingBasket = require ("../shopping_basket")
var food = require("../food")
var customer = require ("../customer")
var assert = require('assert');

describe("Customer", function(){
  beforeEach(function() {
    shoppingBasket.items = [];
  });

  it("customer should be able to add to the basket", function(){
    customer.addToBasket({name: "cheese", price: 3.00});
    assert.equal(1, shoppingBasket.items.length);
  });

  it("customer should be able to remove from the basket", function(){
    customer.addToBasket({name: "cheese", price: 3.00});
    customer.addToBasket({name: "milk", price: 1.00});
    customer.removeFromBasket();
    assert.equal(1,shoppingBasket.items.length)
  })

  it("should discount down further with loyalty card", function(){
    customer.addToBasket({name: "cheese", price: 3.00});
    customer.addToBasket({name: "milk", price: 1.00});
    assert.equal(3.80, customer.total())
  })
})