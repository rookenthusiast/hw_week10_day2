var shoppingBasket = require('./shopping_basket')
var food = require('./food')

var customer = {
  loyalty: true,
  addToBasket: function(food){
shoppingBasket.add(food);
  },
  removeFromBasket: function(food){
    shoppingBasket.remove(food);
  },
  total: function(){
    var total = shoppingBasket.total();
    if (this.loyalty === true){
      total = total - (total * 0.05) 
    }
    return total;
  }
}

module.exports = customer;