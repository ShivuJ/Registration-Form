function validationForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var firstPass = document.getElementById("password").value;
    var secondPass = document.getElementById("password2").value;

    if (name.trim() === "") {
        // alert("Please enter valid name");
        document.getElementById("uname").style.visibility = "visible";
        document.getElementById("emailId").style.visibility = "hidden";
        document.getElementById("contactNo").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("pass2").style.visibility = "hidden";
        return false;
    }
    else if (email.trim() === "") {
        //alert("Please enter valid email");
        document.getElementById("emailId").style.visibility = "visible";
        document.getElementById("uname").style.visibility = "hidden";
        document.getElementById("contactNo").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("pass2").style.visibility = "hidden";
        return false;
    }
    else if (contact.length > 10 || contact.length < 10 || contact.trim() === "") {
        //alert("Please enter valid contact number");
        document.getElementById("contactNo").style.visibility = "visible";
        document.getElementById("uname").style.visibility = "hidden";
        document.getElementById("emailId").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("pass2").style.visibility = "hidden";
        return false;
    }
    else if (firstPass.trim() === "" || firstPass.length < 7) {
        //alert("Please enter valid password");
        document.getElementById("pass").style.visibility = "visible";
        document.getElementById("uname").style.visibility = "hidden";
        document.getElementById("emailId").style.visibility = "hidden";
        document.getElementById("contactNo").style.visibility = "hidden";
        document.getElementById("pass2").style.visibility = "hidden";
        return false;
    }
    else if (firstPass != secondPass || secondPass.trim() === "") {
        //alert("Password does not match")
        document.getElementById("pass2").style.visibility = "visible";
        document.getElementById("uname").style.visibility = "hidden";
        document.getElementById("emailId").style.visibility = "hidden";
        document.getElementById("contactNo").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        return false;
    }
    else {
        alert("Sucessfully Registered...");
        document.getElementById("uname").style.visibility = "hidden";
        document.getElementById("emailId").style.visibility = "hidden";
        document.getElementById("contactNo").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "hidden";
        document.getElementById("pass2").style.visibility = "hidden";
        return true;
    }
}