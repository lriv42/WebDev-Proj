

document.querySelector("#btnLogin").addEventListener("click",(e) => {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let strUsername = document.querySelector("#txtUsername").value
    const strPassword = $('#txtPassword').val()
    strUsername = strUsername.toLowerCase()
    let blnError = false
    let strMessage = ''

    if(strPassword.length < 1){
        blnError = true
        strMessage += '<p class="mb-0 mt-0">Password Cannot Be Blank</p>'
    }

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += '<p  class="mb-0 mt-0">Username must be an email address</p>'
    }

    if(blnError == true){
        Swal.fire({
            title: "Oh no, you have an error!",
            html: strMessage,
            icon: "error"
        });
    }
    
    if(blnError == false){
        Swal.fire({
            title: "Success!",
            text: "success!",
            icon: "success"
        });
    }

})

document.querySelector("#btnSubmit").addEventListener("click",(e) => {

    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let strUsername = document.querySelector("#txtUsername").value
    const strPassword = $('#txtPassword').val()
    let strFirst = document.querySelector("#txtFirstName").value
    let strLast = document.querySelector("#txtLastName").value

    strUsername = strUsername.toLowerCase()

    let blnError = false
    let strMessage = ''

    if(strPassword.length < 1){
        blnError = true
    }

    if(!regEmail.test(strUsername)){
        blnError = true
    }

    if(strLast.length < 1){
        blnError = true
    }


    if(blnError){

        strMessage += "Please fill out all required parts of the form!"

        Swal.fire({
            title: "Whoops!",
            html: strMessage,
            icon: "error"
        });
    }

    if(!blnError){
        Swal.fire({
            title: "Success!",
            text: "success!",
            icon: "success"
        });
    }

})

document.querySelector("#btnAuthenticate").addEventListener("click",(e) => {
    strAuthentication = document.querySelector("#txtAuthentication").value()

    let blnError = false
    let strMessage = ''


    if(strAuthentication.length < 1){
        blnError = true
    }


    if(blnError){

        strMessage += "Please fill out all required parts of the form!"

        Swal.fire({
            title: "Whoops!",
            html: strMessage,
            icon: "error"
        });
    }

    if(!blnError){
        Swal.fire({
            title: "Success!",
            text: "success!",
            icon: "success"
        });
    }

})

$('#btnSwapToRegister').on('click',function(){
    $('#frmLogin').slideUp('fast')
    $('#frmRegister').slideDown('slow')
})

$('#btnSwapToLogin').on('click',function(){
    $('#frmRegister').slideUp('fast')
    $('#frmLogin').slideDown('slow')
})

$('#btnLogin').on('click',function(){
    $('#frmLogin').slideUp('fast')
    $('#frmAuthentication').slideDown('slow')
})