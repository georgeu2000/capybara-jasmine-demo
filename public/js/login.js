$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        
        submitLogin(e);
    });
});


function submitLogin(e){
  var form = $('#loginForm');

  if(Validator.check(form)==false){
    return
  }

  $.ajax({
      url: "/login",
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: serializeForm(form),
      success: function(data, textStatus, jqXHR) {
          console.log("Login success.");
      },
      error: function(jqXHR, textStatus, errorThrown) {
          console.log("Login failure.");
      }
  });
};


function serializeForm( form ){
    var email = form.find("input[name='email']").val();
    var password = form.find("input[name='password']").val();

    return JSON.stringify({'email':email, 'password':password});
}
