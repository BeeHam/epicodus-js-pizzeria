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
  if(this.numberToppings === 'one') {
    return basePrice + 3;
  } else if (this.numberToppings === 'two') {
    return basePrice + 4;
  } else if (this.numberToppings === 'three') {
    return basePrice + 5
  } else {
    return basePrice + 6
  }
}

Pizza.prototype.totalPrice = function() {
  return (this.sizePrice() + this.toppingPrice()) * this.quantity;
}


$(document).ready(function() {

  $('input[name=toppings-number]').click(function() {
    $("#toppings-field").fadeIn();
  });

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var sizeInput = $('input[name=size]:checked').val();
    var toppingsNumberInput = $('input[name=toppings-number]:checked').val();
    var quantityInput = parseInt($('input#quantity').val());
    var toppingsFieldInput = $("#toppings-field").val();

    var newPizza = new Pizza(sizeInput, toppingsNumberInput, quantityInput);

    $("#size-choice").text(sizeInput);
    $("#topping-choice").text(toppingsNumberInput);
    $("#toppings-selected").text(toppingsFieldInput);
    $("#quantity-choice").text(quantityInput);

    $("#total-price").text("$" + newPizza.totalPrice() + ".00");

    $("#show-order").fadeIn();
    $('input#quantity').val("");
    $("#toppings-field").val("");
  });
});
