var shoppingBasket = require ("../shopping_basket")
var assert = require('assert');

describe("shoppingBasket", function(){
  beforeEach(function() {
    shoppingBasket.items = [];
  });

  it('should start empty', function(){
    assert.equal(0, shoppingBasket.items.length)
  })

  it('should add item to basket', function(){
    shoppingBasket.add({name: "cheese", price: 3.00});
    assert.equal(1, shoppingBasket.items.length);
  })

  it('should remove item from basket', function(){
    shoppingBasket.add({name: "cheese", price: 3.00});
    shoppingBasket.add({name: "milk", price: 1.00});
    assert.equal(2, shoppingBasket.items.length);
    shoppingBasket.remove();
    assert.equal(1, shoppingBasket.items.length);
  })

  it('should discount by 10% if total greater than 20', function(){
    shoppingBasket.add({name: "cheese", price: 3.00});
    shoppingBasket.add({name: "milk", price: 1.00});
    assert.equal(4.00,shoppingBasket.total())
  })
});