describe('Pizza', function() {
  it("creates a new Pizza with the given parameters", function() {
    var testPizza = new Pizza('large', 3, 1);
    expect(testPizza.pieSize).to.equal('large');
    expect(testPizza.numberToppings).to.equal(3);
    expect(testPizza.quantity).to.equal(1);
  });

  it("will create price for pizza size", function() {
    var testPizza = new Pizza('large', 3, 1);
    expect(testPizza.sizePrice()).to.equal(5);
  });

  it("will create price for number of toppings", function() {
    var testPizza = new Pizza('large', 3, 1);
    expect(testPizza.toppingsPrice()).to.equal(5);
  });
});
