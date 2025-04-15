

document.querySelector("#btnLogin").addEventListener("click",(e) => {
    const regEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    let strLoginUser = document.querySelector("#txtLoginUser").value
    const strLoginPass = $('#txtLoginPass').val()
    strLoginUser = strLoginUser.toLowerCase()
    let blnError = false
    let strMessage = ''

    if(strLoginPass.length < 1){
        blnError = true
        strMessage += 'Password Cannot Be Blank.\n';
    }

    if(!regEmail.test(strLoginUser)){
        blnError = true
        strMessage += 'Username must be an email address.\n';
    }

    if(blnError == true){
        Swal.fire({
            title: 'Oh no!',
            text: 'You have encountered an error.\n' + strMessage,
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
          });
    }
    
    if(blnError == false){
        Swal.fire({
            title: 'Success!',
            text: 'Your action was successful.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
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
        strMessage += 'Password Cannot Be Blank. '
    }

    if(!regEmail.test(strUsername)){
        blnError = true
        strMessage += 'Username must be an email address. '
    }

    if(strLast.length < 1){
        blnError = true
        strMessage += 'Last Name Cannot Be Blank. '
    }


    if(blnError){

        Swal.fire({
            title: 'Whoops!',
            text: 'You have encountered an error! ' + strMessage,
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
          });
    }

    if(!blnError){
        Swal.fire({
            title: 'Success!',
            text: 'Your action was successful.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
          });
    }

})

document.querySelector("#btnAuthenticate").addEventListener("click",(e) => {
    strAuthentication = document.querySelector("#txtAuthentication").value

    let blnError = false
    let strMessage = ''


    if(strAuthentication.length < 1){
        blnError = true
        strMessage += ' Authentication Code Cannot Be Blank! '
    }


    if(blnError){

        Swal.fire({
            title: 'Uh Oh!',
            text: 'Your action was unsuccessful! ' + strMessage,
            icon: 'error',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
          });
    }

    if(!blnError){
        Swal.fire({
            title: 'Success!',
            text: 'Your action was successful.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
              confirmButton: 'btn btn-primary text-white', // Ensures button text is visible
            },
            background: '#1a202c', // Dark background to match your theme
            color: '#ffffff', // White text for the alert
          });
    }

})

//clear frmfeedback when btnSubmitFeedback is clicked
$('#btnSubmitFeedback').on('click', function () {
    // Clear the input fields and textarea in frmFeedback
    $('#txtFeedbackName').val('');
    $('#txtFeedback').val('');
});


$('#btnSwapToRegister').on('click',function(){
    $('#frmLogin').slideUp('fast')
    $('#frmRegister').slideDown('fast')
})

$('#btnSwapToLogin').on('click',function(){
    $('#frmRegister').slideUp('fast')
    $('#frmLogin').slideDown('fast')
})

$('#btnLogin').on('click',function(){
    $('#frmLogin').slideUp('fast')
    $('#frmAuthentication').slideDown('fast')
})

$('#btnAuthenticate').on('click',function(){
    $('#frmAuthentication').slideUp('fast')
    $('#frmFeedback').slideDown('fast')
})

$('#btnLogout').on('click',function(){
    $('#frmFeedback').slideUp('fast')
    $('#frmLogin').slideDown('fast')
})