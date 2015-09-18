describe('Pizza', function() {
  it("creates a new Pizza with the given parameters", function() {
    var testPizza = new Pizza('large', 3, 1);
    expect(testPizza.pieSize).to.equal('large');
    expect(testPizza.numberToppings).to.equal(3);
    expect(testPizza.quantity).to.equal(1);
  });
});
