$(function () {
    $('#btn-save').on('click', function () {
        
        var Name = $('#name').val();
        var lastName = $('#lastName').val();
        var Email = $('#email').val();
       var formEmail =/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        var Pass = $('#password').val();
        var Cpass = $('#cpassword').val();
        var option = $('#option').val();
        var textarea = $('#textarea').val();
      //  var checkbox = $('#checkbox');
        var checkBox = document.getElementById("checkbox");
      
       // console.log(checkbox.prop("checked"));

        var gender = document.getElementsByName("gender");
        var formValid = false;
    
        var i = 0;
        while (!formValid && i < gender.length) {
        if (gender[i].checked) formValid = true;
            i++;        
        }
    
    if(!formValid){
        $('#empty').text("please choose the gender").css('color', 'red');
        }
        
         if (Name == ""){
            $('#name_empty').text('please enter user name').css('color', 'red');
            $('#name').css('border', '1px solid red');
           
          
            }
            if (lastName == ""){
                $('#lastName_empty').text('please enter user last name').css('color', 'red');
                $('#lastName').css('border', '1px solid red');
               
            }
            if (Email==""){
                $('#email_empty').text('please enter user email').css('color', 'red');
                $('#email').css('border', '1px solid red');
                
        } else
        if (!formEmail.test(Email)){
            $('#email_empty').text('Email form must be aaa@aaa.aaa').css('color', 'red');
            $('#email').css('border', '1px solid red');
        }
       
        
        if (Pass.length < 5 ){
            $('#password_empty').text('please enter password minst 6chareckter').css('color', 'red');
            $('#password').css('border', '1px solid red');
        } if (Cpass.length <5){
            $('#cpassword_empty').text('please confirm the password').css('color', 'red');
            $('#cpassword').css('border', '1px solid red');
        } else
        if (Cpass !== Pass){
            $('#cpassword_empty').text('Password not the same').css('color', 'red');
            $('#cpassword').css('border', '1px solid red');
        } 
        if (option == "") {
            $('#option_empty').text('please choose a city').css('color', 'red');
            $('#option').css('border', '1px solid red');
        } 
        if (textarea.length < 5) {
            $('#textarea_empty').text('please write something ...').css('color', 'red');
            $('#textarea').css('border', '1px solid red');
        } 
        if(formValid){
            $('#empty').text("it is okay").css('color', 'blue');
        }
        if(checkBox.checked == false){
            $('#mycheck').text("check it").css('color', 'red');
        }
            if (Name !== "") {
                $('#name_empty').text('').css('color', 'blue');
                $('#name').css('border', '1px solid blue');
            } if (lastName !== "") {
                $('#lastName_empty').text('').css('color', 'blue');
                $('#lastName').css('border', '1px solid blue');
            } 
            if (formEmail.test(Email)) {
                $('#email_empty').text('').css('color', 'blue');
                $('#email').css('border', '1px solid blue');
            } 
            if (Pass.length >4) {
                $('#password_empty').text('').css('color', 'blue');
                $('#password').css('border', '1px solid blue');
            } 
            if (Cpass == Pass) {
                $('#cpassword_empty').text('').css('color', 'blue');
                $('#cpassword').css('border', '1px solid blue');
            } if (option !== "") {
                $('#option_empty').text('').css('color', 'blue');
                $('#option').css('border', '1px solid blue');
            }if (textarea.length > 4) {
                $('#textarea_empty').text('').css('color', 'blue');
                $('#textarea').css('border', '1px solid blue');
            }

            if (Name !== "" 
            && (formValid)
            && lastName !== "" 
            && formEmail.test(Email) 
            && Pass.length >4
            && Cpass.length >4 
            && option !== "" 
            && textarea.length > 4 ) {
                if (Cpass == Pass) {
                    $('#successfull').text('you have Successfully registered:').css('color', 'green');
                    $('form').trigger('resret');
                }
                else {
                    $('#password,#cpassword').css('border', '1px solid red');
                }
            }
 })
})

