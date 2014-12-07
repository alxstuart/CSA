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