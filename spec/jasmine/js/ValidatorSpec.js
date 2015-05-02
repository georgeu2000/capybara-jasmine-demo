describe("Validator", function(){
  it("blank text fails", function(){
    var validator = new Validator();
    var $form = $('form');

    fillIn('form input[ name="password" ]', '');
  
    expect(validator.check($form)).toEqual(false);
  });

  it("short text fails", function(){
    var validator = new Validator();
    var $form = $('form');
  
    fillIn('form input[ name="password" ]', 'z');

    expect(validator.check($form)).toEqual(false);
  });

  it("long text succeeds", function(){
    var validator = new Validator();
    var $form = $('form');
  
    fillIn('form input[ name="password" ]', 'zzz');

    expect(validator.check($form)).toEqual(true);
  });
});