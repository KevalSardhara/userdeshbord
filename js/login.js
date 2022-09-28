// document.getElementById("login_page").addEventListener("click", login_form);

function login_form(event) {
  let emailVld = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let login_email = document.getElementById("login_email").value.trim();
  let login_psw = document.getElementById("login_psw").value.trim();

  if (login_email === "" || login_psw === "") {
    alert("Please fill all the fields");
    event.preventDefault();
    return false;
  }
  if (login_email.match(emailVld)) {
    let userObj = {
      lemail: login_email,
      lpsw: login_psw,
    };

    let findAll = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : [];

    if (findAll.length > 0) {
      for (let i = 0; i < findAll.length; i++) {
        if (
          findAll[i].emailId === userObj.lemail &&
          findAll[i].psw === userObj.lpsw
        ) {
            sessionStorage.setItem("login_email", userObj.lemail);
            sessionStorage.setItem("login_psw", userObj.lpsw);
            sessionStorage.setItem("id", i);
            sessionStorage.setItem("status", "true");
            sessionStorage.setItem("forgot_psw_session", "false");
            
          window.open("user_info.php",'_blank');
          return true;
        }
      }
      alert("login failed enter valid email or password");
      event.preventDefault();
      return false;
    } else {
      alert("No any data please create account");
      event.preventDefault();
      return false;
    }
  } else {
    alert("Please enter valid email id");
    event.preventDefault();
    return false;
  }
}

// -------------------------------------------------------------------------- //

function forgot(event){
  let email_fill = document.getElementById("login_email").value.trim();
  if(email_fill !== ""){
    sessionStorage.clear();
    sessionStorage.setItem("forgot_email", email_fill);
    sessionStorage.setItem("forgot_psw_session", true);
    
    window.open("../forgot_psw.php");
    // ------------------------------- //
    user_update(event);
    // ------------------------------- //
    return true;
  }
  else{
    alert("Enter Email and then Forgot the password");
    event.preventDefault();
    return false;
  }
}
