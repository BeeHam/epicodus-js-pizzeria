function Pizza(pieSize, numberToppings, quantity) {
  this.pieSize = pieSize;
  this.numberToppings = numberToppings;
  this.quantity = quantity;
}

var basePrice = 0;

Pizza.prototype.sizePrice = function() {
  if (this.pieSize === 'small') {
    return basePrice + 3;
  } else if (this.pieSize === 'medium') {
    return basePrice + 4;
  } else {
    return basePrice + 5;
  }
}
