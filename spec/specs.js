describe('Pizza', function() {
  it("creates a new Pizza with the given parameters", function() {
    var testPizza = new Pizza('large', 'three', 1);
    expect(testPizza.pieSize).to.equal('large');
    expect(testPizza.numberToppings).to.equal('three');
    expect(testPizza.quantity).to.equal(1);
  });

  it("will create price for pizza size", function() {
    var testPizza = new Pizza('large', 'three', 1);
    expect(testPizza.sizePrice()).to.equal(5);
  });

  it("will create price for number of toppings", function() {
    var testPizza = new Pizza('large', 'three', 1);
    expect(testPizza.toppingPrice()).to.equal(5);
  });

  it("will create total price for given pizza", function() {
    var testPizza = new Pizza('large', 'three', 2);
    expect(testPizza.totalPrice()).to.equal(20);
  });
});
