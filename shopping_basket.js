var shoppingBasket = {
  items: [],
  add:function(item) {
    this.items.push(item);
  },
  remove:function(item){
    var indexOfItem = this.items.indexOf(item);
    this.items.splice(indexOfItem,1);    
  },
  total: function(){
    var total = 0;
    for( item of this.items){
      total += item.price;
      // if (item.)
    }
    return this.discount(total);
  },

  discount: function(total){
    if (total > 20){
      var newTotal = total - (total * 0.1);
      return newTotal; 
    } else {
      return total;
    }
  }
  
}

module.exports = shoppingBasket;
