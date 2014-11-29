$('#broadcastform').submit(function()
    {
     var myForm =  $('#broadcastform').serialize();
     alert(myForm);
        $.ajax
         ({
            url:'http://localhost:3000/broadcasts.json',
             type:"POST",
             dataType:'text',
             data: myForm,
             processData:false,
            success: function (msg)
            {
            alert(msg);
            },
            error: function (xhr, status)
            {
            alert(xhr.error);
            }
         });
    });