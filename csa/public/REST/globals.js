$(document).ready(function() {
            $('#login').click(function(e) {
                var username = $('#username').val();
                var password = $('#password').val();
                alert(window.logInUser);
                // set cookies to expire in 14 days
                $.cookie('username', username, {
                    expires: 1
                });
                var something=$.cookie(username);
                $.cookie('password', password, {
                    expires: 1
                });
                $.cookie('remember', true, {
                    expires: 1
                });
            });
            $('#logoutBtn').click(function(e) {
                // reset cookies
                $.cookie('email', null);
                $.cookie('password', null);
                $.cookie('remember', null);
            });
            $(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").click(function() {
                    if ($.window.logInUser == "admin") {
                            $("#broadcastContent").clear;
                            alert('I may have broken the internet');
                            $('#broadcastContent').load('pages/adminBroadcast.html');
                        
                    }
            });
      });



function isEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function isPhone(phoneNo){
      var pattern = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
      return pattern.test(phoneNo);
}
function hasContent(content){
      if (content.length > 0){return true} else{return false}
}
function checkpasswordmatch(password, secondPassword){
      if (password == secondpassword){return true}else{return false}
}