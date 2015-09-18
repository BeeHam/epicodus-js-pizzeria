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

Pizza.prototype.toppingPrice = function() {
  if(this.numberToppings === 1) {
    return basePrice + 3;
  } else if (this.numberToppings === 2) {
    return basePrice + 4;
  } else if (this.numberToppings === 3) {
    return basePrice + 5
  } else {
    return basePrice + 6
  }
}
