// $(document).ready(function(){
    $("#submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var contact = $("#contact").val();
        var firstpass = $("#password").val();
        var secondpass = $("#password2").val();
    
        if (name.trim() === "") {
            // alert("Please enter valid name");
            $("#uname").css('visibility', 'visible');
            $("#emailId").css('visibility', 'hidden');
            $("#contactNo").css('visibility', 'hidden');
            $("#pass").css('visibility', 'hidden');
            $("#pass2").css('visibility', 'hidden');
            return false;
        }
        else if (email.trim() === "") {
            //alert("Please enter valid email");
            $("#emailId").css('visibility', 'visible');
            $("#uname").css('visibility', 'hidden');
            $("#contactNo").css('visibility', 'hidden');
            $("#pass").css('visibility', 'hidden');
            $("#pass2").css('visibility', 'hidden');
            return false;
        }
        else if (contact.length > 10 || contact.length < 10 || contact.trim() === "") {
            // alert("Please enter valid contact number");
            $("#contactNo").css('visibility', 'visible');
            $("#uname").css('visibility', 'hidden');
            $("#emailId").css('visibility', 'hidden');
            $("#pass").css('visibility', 'hidden');
            $("#pass2").css('visibility', 'hidden');
            // $("#contact").keyup(function(){
            //     if(contact.length > 10 || contact.length < 10){
            //         $("#contactNo").css('visibility', 'hidden');
            //         $("#contactNo").css('visibility', 'visible');
            //     };
            // });
            return false;
        }
        else if (firstpass.trim() === "" || firstpass.length < 7) {
            //alert("Please enter valid #password");
            $("#pass").css('visibility', 'visible');
            $("#uname").css('visibility', 'hidden');
            $("#emailId").css('visibility', 'hidden');
            $("#contactNo").css('visibility', 'hidden');
            $("#pass2").css('visibility', 'hidden');
            return false;
        }
        else if (firstpass != secondpass || secondpass.trim() === "") {
            //alert("#password does not match")
            $("#pass2").css('visibility', 'visible');
            $("#uname").css('visibility', 'hidden');
            $("#emailId").css('visibility', 'hidden');
            $("#contactNo").css('visibility', 'hidden');
            $("#pass").css('visibility', 'hidden');
            return false;
        }
        else {
            alert("Sucessfully Registered...");
            $("#uname").css('visibility', 'hidden');
            $("#emailId").css('visibility', 'hidden');
            $("#contactNo").css('visibility', 'hidden');
            $("#pass").css('visibility', 'hidden');
            $("#pass2").css('visibility', 'hidden');
            return true;
        }
    });
// });