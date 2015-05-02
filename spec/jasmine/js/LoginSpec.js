describe( 'Login', function(){
  var email    = 'user@example.com';
  var password = 'password';

  var TestResponses = {
        success: {
          status: 200,
          contentType:'application/json',
          dataType:'json',
          responseText: '{}' },
        failure: {
          status: 500,
          responseText: '{}'}
      };

  beforeEach(function(){
    jasmine.Ajax.install();
    clearForm();
  })

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  function submitForm(){
    fillIn( 'input[name="email"]', email );
    fillIn( 'input[name="password"]', password );
    clickSubmit();
  };

  function clearForm(){
    fillIn( 'input[name="email"]', '' );
    fillIn( 'input[name="password"]', '' );
  }

  it( 'Form submit posts to correct url', function(){
    submitForm();

    expect(lastRequest().method).toEqual('POST');
    expect(lastRequest().url).toEqual('/login');
  });

  it( 'Form submit posts correct JSON', function(){
    submitForm();

    expect(lastRequest().data()).toEqual({ email:email, password:password })
  });

  it( 'Missing password does not submit', function(){
    expect(noAjaxRequests()).toBe(true);

    fillIn( 'input[name="email"]', email );
    clickSubmit();

    expect(noAjaxRequests()).toBe(true);
  });

  it( 'Missing email does not submit', function(){
    expect(noAjaxRequests()).toBe(true);

    fillIn( 'input[name="password"]',        password );
    clickSubmit();

    expect(noAjaxRequests()).toBe(true);
  });

  it( 'Invalid email does not submit', function(){
    expect(noAjaxRequests()).toBe(true);

    fillIn( 'input[name="email"]',    'invalid_email' );
    fillIn( 'input[name="password"]',        password );
    clickSubmit();

    expect(noAjaxRequests()).toBe(true);
  });
});
