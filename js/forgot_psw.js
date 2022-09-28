function forgot_psw(event){
    let psw = document.getElementById("forgot_psw").value.trim();
    let psw_repeat = document.getElementById("forgot_psw_repeat").value.trim();

    if(psw !== "" && psw_repeat !== ""){
      if(psw === psw_repeat){
        let email_key = sessionStorage.getItem("forgot_email");
  
        let userArrayObject = JSON.parse(localStorage.getItem("userData"));
  
        for(let i = 0; i < userArrayObject.length; i++){
          if(userArrayObject[i].emailId === email_key){
            userArrayObject[i].psw = psw;
            userArrayObject[i].psw_repeat = psw_repeat;  
            break;
          }
        }
        let jsonData = JSON.stringify(userArrayObject);
        localStorage.setItem("userData",jsonData);
  
        sessionStorage.clear();
        sessionStorage.setItem("forgot_psw_session", "false");
      
        window.open("index.php");
        return true;
      }
      else{
        alert("Password does not match");
        event.preventDefault();
        return false;
      }
    }
    else{
      alert("Please fill all the fields");
      event.preventDefault();
      return false;
    }
  }
  
  function forgot_psew_update_cancle() {
      sessionStorage.clear();
      sessionStorage.setItem("forgot_psw_session", "false");
      window.open("index.php");
      return true;
    }


