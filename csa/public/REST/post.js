 var logInUser = 'admin'; //global variable for admin login
    var logInPassword = 'taliesin'; //global variable for admin login
    var urlBroadcasts = 'http://localhost:3000/broadcasts.json';
    var urlUsers = 'http://localhost:3000/users.json';
    hash = btoa(logInUser + ":" + logInPassword);
$(function() {
   
    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////  
    //logging in
    $('#login').click(function(e) {
        logInUser = $('#username').val();
        logInPassword = $('#password').val();
        alert(hash);
        // set cookies to expire in 14 days
        $.cookie('username', logInUser, {
            expires: 1
        });
        alert($.cookie('username'));
        var something = $.cookie(username);
        $.cookie('password', logInPassword, {
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
        //reset boxes
        $('#username').val('');
        $('#password').val('');
    });
    ///////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////  
    //loading pages
    //broadcast page
    $(".main_menu a.templatemo_page5, .responsive_menu a.templatemo_page5").click(function() {
        if (logInUser == "admin") {
            $("#broadcastContent").clear;
            alert('I may have broken the internet');
            $('#broadcastContent').load('pages/adminbroadcast.html');
        }
    });


    $('#new_broadcast').submit(function(e) {
        e.preventDefault(); //STOP default action
        broadcast();
        /*var myForm =$('#new_broadcast').serialize();
         console.log(myForm);
         

        $.ajax(
        {
            url :"http://localhost:3000/broadcasts.json" ,
            beforeSend: function(xhr) {
                            hash = btoa(logInUser + ":" + logInPassword);
                            console.log(hash);
                            xhr.setRequestHeader("Authorization", "Basic " + hash);
                        },
            type: "POST",
            data : myForm,
            dataType : 'json',
            success:function(data, textStatus, jqXHR) 
            {
               alert('posted'); 
            },
            error: function(jqXHR, textStatus, errorThrown) 
            {
                alert('not posted');
            }
        });
        return false;*/
    });
    $('#userform').submit(function(e) {
        e.preventDefault(); //STOP default action
        console.log('a thing');
        var myForm = $('#userform').serialize();
        $.ajax({
            url: 'http://localhost:3000/users',
            beforeSend: function(xhr) {
                hash = btoa(logInUser + ":" + logInPassword);
                console.log(hash);
                xhr.setRequestHeader("Authorization", "Basic " + hash);
            },
            type: "POST",
            data: myForm,
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                alert('posted');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('not posted');
            }
        });
        return false;
    });
});


    function broadcast() {
        var myForm = $('#new_broadcast').serialize();
        console.log(myForm);
        $.ajax({
            url: "http://localhost:3000/broadcasts.json",
            beforeSend: function(xhr) {
                hash = btoa(logInUser + ":" + logInPassword);
                console.log(hash);
                xhr.setRequestHeader("Authorization", "Basic " + hash);
            },
            type: "POST",
            data: myForm,
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                alert('posted');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('not posted');
            }
        });
        return false;
    }