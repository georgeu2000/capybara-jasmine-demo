function Validator(){
}

Validator.prototype.check = function( form ){
    var email = form.find("input[name='email']").val();
    var password = form.find("input[name='password']").val();

    if (validateEmail(email)==false){
      return false;
    }

    if (password==''){
      return false;
    }

    return true;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


var Validator = new Validator();
