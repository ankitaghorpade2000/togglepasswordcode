let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type = "text";
        eyeicon.src = "open eye final.png";
        password.value = "ankita@123";
    } else {
        password.type = "password";
        eyeicon.src = "close eye final_01.png"

    }
}