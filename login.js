function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--sucess", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);

}

$(document).ready(function() {
    // 讀取 URL 的查詢字串中的 registered 參數
    const params = new URLSearchParams(window.location.search);
    const registered = params.get('registered');
  
    // 如果 registered 參數的值為 true，顯示表單，否則隱藏表單
    if (registered === 'true') {
      $('#login').addClass('form--hidden');
      $('#createAccount').removeClass('form--hidden');
      $('#findPassword').addClass('form--hidden');
    }
  });

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");
    const findPasswordForm = document.getElementById("findPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        
        createAccountForm.classList.remove("form--hidden");
        findPasswordForm.classList.add("form--hidden");
        
    });

    document.querySelector("#linkLoginfromPW").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        
        createAccountForm.classList.add("form--hidden");
        findPasswordForm.classList.add("form--hidden");
        
    });

    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        
        createAccountForm.classList.add("form--hidden");
        findPasswordForm.classList.add("form--hidden");
        
    });

    document.querySelector("#linkFindPassword").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        findPasswordForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#continueLogin").addEventListener("click", e=>{
        e.preventDefault();
        //alert(e.target.id);


        //Ajax Detection

        setFormMessage(loginForm,"error","Incorrect Username/Password");
    });

    document.querySelector("#continueCreateAccount").addEventListener("click", e=>{
        e.preventDefault();
        //alert(e.target.id);


        //Ajax Detection

        setFormMessage(createAccountForm,"error","Incorrect Input Method");
    });
   
    document.querySelector("#getVerify").addEventListener("click", e=>{
        e.preventDefault();
        var curEmail = document.getElementById("email").value;
        //alert(e.target.id);


        //Ajax Detection
        if(1){  // Sucessfuly sent
            setFormMessage(findPasswordForm,"sucess","Verify code has successfully send to "+curEmail);
            document.getElementById("continueFindPassword").disabled = false;
            document.getElementById("verify").disabled = false;
        }
        else if(3){ // Sending Email Failed
            setFormMessage(findPasswordForm,"error","Sending email failed, please contact to the authority");
        }
        else{   // Account not exist or invalid input
            setFormMessage(findPasswordForm,"error","Incorrect Input Method");
        }
        
    });

    document.querySelector("#continueFindPassword").addEventListener("click", e=>{
        e.preventDefault();
        //alert(e.target.id);


        //Ajax Detection

        setFormMessage(createAccountForm,"error","Incorrect Verify Code");
    });
    
});

