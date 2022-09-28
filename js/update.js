if(sessionStorage.getItem("forgot_psw_session") === "false"){
  function fillUp() {
    let i = parseInt(sessionStorage.getItem("id"));
    let session = sessionStorage.getItem("status");
  
    console.log(i);
    if (session === "true") {
      console.log(i);
      let userObj = JSON.parse(localStorage.getItem("userData"));
      console.log(userObj);
      document.getElementById("update_uname").value = userObj[i].uname;
      document.getElementById("update_birthdate").value = userObj[i].birthdate;
      document.getElementById("update_mo_number").value = userObj[i].mo_number;
      document.getElementById("update_email").value = userObj[i].emailId;
  
      if (userObj[i].gender === "male") {
        document.getElementById("update_male").checked = true;
      } else {
        document.getElementById("update_female").checked = true;
      }
    } else {
      document.getElementById("container").innerHTML = `<div>
            <span>
              No data found plaese <a href="./login.html">login now</a>
            </span>
          </div>`;
    }
    return true;
  }
  fillUp();
}

function update_cancle() {
    window.open("user_info.php");
    return true;
  }
function user_update(event) {



    let uname = document.getElementById("update_uname").value.trim();
    let gender = document.getElementById("update_male");
    let birthdate = document.getElementById("update_birthdate").value.trim();
    let mo_number = document.getElementById("update_mo_number").value.trim();
    let emailId = document.getElementById("update_email").value.trim();

    gender = gender.checked === true ? "male" : "female";

    let i = parseInt(sessionStorage.getItem("id"));
    let session = sessionStorage.getItem("status");
    let arrObj = JSON.parse(localStorage.getItem("userData"));

    if (session === "true") {
        if (
          uname === "" ||
          birthdate === "" ||
          mo_number === "" ||
          emailId === ""
        ) {
          alert("Please fill all the fields");
          event.preventDefault();
          return false;
        }


      let userObj = {
        uname: uname,
        gender: gender,
        birthdate: birthdate,
        mo_number: mo_number,
        emailId: emailId,
        psw: arrObj[i].psw,
        psw_repeat: arrObj[i].psw_repeat,
      };
        arrObj[i].uname = userObj.uname;
        arrObj[i].gender = userObj.gender;
        arrObj[i].birthdate = userObj.birthdate;
        arrObj[i].mo_number = userObj.mo_number;
        arrObj[i].emailId = userObj.emailId;

        let jsonData = JSON.stringify(arrObj);
        localStorage.setItem("userData",jsonData);

        sessionStorage.clear();

        sessionStorage.setItem("login_email", userObj.emailId);
        sessionStorage.setItem("login_psw", userObj.psw);
        sessionStorage.setItem("id", i);
        sessionStorage.setItem("status", "true");
      
        window.open("user_info.php");
        return true;
        
    }
        document.getElementById("container").innerHTML = `<div>
        <span>
        No data found plaese <a href="./index.php">login now</a>
        </span>
        </div>`;
        return true;
}



