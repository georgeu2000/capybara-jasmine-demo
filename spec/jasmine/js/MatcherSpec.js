describe("Matchers", function() {
  it("equals", function() {
    var sum = 1 + 1;
    expect(sum).toEqual(2);
  });

  it("does not equal", function() {
    var sum = 1 + 1;
    expect(sum).not.toEqual(5);
  });

  it("null", function() {
    var sum = null;
    expect(sum).toBeNull();
  });

  it("undefined equals", function() {
    var sum;
    expect(sum).toBe(undefined);
  });

  it("undeclared", function() {
      expect(typeof total).toBe('undefined');
  });

  it("equals object", function() {
    var obj_1 = { foo:1, bar:2 };
    var obj_2 = { foo:1, bar:2 };

    expect(obj_1).toEqual(obj_2);
  });

  it("regular expressions", function() {
    var message = "1234567890";

    expect(message).toMatch(/123/);
    expect(message).toMatch(/\d+/);
    expect(message).not.toMatch(/abc/);
  });

  it("truthy", function(){
    expect('oh yes!').toBeTruthy();
  });

  it("falsy", function(){
    expect('').toBeFalsy();
  });

  it("to contain", function(){
    var words = [ "foo", "bar", "bax" ];

    expect(words).toContain("bar");
    expect(words).not.toContain("no way jose");
  });

  it("is less than", function(){
    expect(5).toBeLessThan(10);
  });
});
