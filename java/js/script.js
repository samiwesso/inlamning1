function ValidateForm(){
    var first_name= document.getElementById("first_name");
    var sure_name= document.getElementById("sure_name");
    var phoneNum= document.getElementById("phoneNum");
    var email= document.getElementById("email");
    var password= document.getElementById("password");
    var confirm_password= document.getElementById("confirm_password");
    var options= document.getElementById("options");
    var checkBox = document.getElementById("myCheck");
    var gender = document.getElementsByName("gender");
    var formValid = false;

    var i = 0;
    while (!formValid && i < gender.length) {
    if (gender[i].checked) formValid = true;
        i++;        
    }
    removeMessage();
    var valid=true;
    if(first_name.value.length==0){
        first_name.className="wrong-input";
        first_name.nextElementSibling.innerHTML="Username can not be blank";
        valid=false;
    }
    if(sure_name.value.length==0){
        sure_name.className="wrong-input";
        sure_name.nextElementSibling.innerHTML="Sure name can not be blank";
        valid=false;
    }
    if(phoneNum.value.length<10){
        phoneNum.className="wrong-input";
        phoneNum.nextElementSibling.innerHTML="contact number canot be less than 10";
        valid=false;
    }
    else if (!(/^\d+$/.test(phoneNum.value))){
        phoneNum.className="wrong-input";
        phoneNum.nextElementSibling.innerHTML="must be only number";
        valid=false;
    }
    if(email.value.length==0){
        email.className="wrong-input";
        email.nextElementSibling.innerHTML="Email can not be blank";
        valid=false;
    } else
    if(!(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/.test(email.value))){
        email.className="wrong-input";
        email.nextElementSibling.innerHTML="control your mail (aaaa@aa.aaa)";
        valid=false;
    }
    if(password.value.length<6){
        password.className="wrong-input";
        password.nextElementSibling.innerHTML="Password can not be less than 6";
        valid=false;
    }
    if(password.value!=confirm_password.value){
        confirm_password.className="wrong-input";
        confirm_password.nextElementSibling.innerHTML="Password does not match";
        valid=false;
    }
    if(!formValid){
        $('#empty').text("check the gender please").css('color', 'red');
        }
        else if(formValid){
            $('#empty').text("it is okay").css('color', 'blue');
        }

    if(options.value.length==0){
        options.className="wrong-input";
        options.nextElementSibling.innerHTML="You must choose one..";
        valid=false;
    }
    if (checkBox.checked == false){
        checkBox.className="wrong-input";
        checkBox.nextElementSibling.innerHTML="You must check the condition..";
        valid=false;
  }
  
    return valid;             
}


function removeMessage(){
    var errorinput=document.querySelectorAll(".wrong-input");
    [].forEach.call(errorinput, function(el){
        el.classList.remove("wrong-input");
    });
    var errorinput=document.querySelectorAll(".error");
    [].forEach.call(errorinput, function(el){
        el.innerHTML="";
    });
}


