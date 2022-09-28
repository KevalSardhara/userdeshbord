// ------------------------------------------registreation page----------------------------------------- //
let mNoVld = /^\d{10}$/;
let emailVld = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let psw = document.getElementById("psw").value.trim();

function isNumber(evt) {
  var charCode = evt.keyCode;
  if (charCode < 48 || charCode > 57) {
    alert("Please enter only Numbers.");
    //   not write the key value for the meaning of false...!
    return false;
  }
  return true;
}

function isValid(evt) {
  var charCode = evt.keyCode;
  if (charCode < 48 || charCode > 57) {
    alert("Please enter only Numbers.");
    return false;
  }
  return true;
}

function userRegistration(event) {
  let uname = document.getElementById("uname").value.trim();
  let gender = document.getElementById("male");
  let birthdate = document.getElementById("birthdate").value.trim();
  let mo_number = document.getElementById("mo_number").value.trim();
  let emailId = document.getElementById("email").value.trim();
  let psw = document.getElementById("psw").value.trim();
  let psw_repeat = document.getElementById("psw_repeat").value.trim();

  gender = gender.checked === true ? "male" : "female";

  if (
    uname === "" ||
    birthdate === "" ||
    mo_number === "" ||
    emailId === "" ||
    psw === "" ||
    psw_repeat === ""
  ) {
    alert("Please fill all the fields");
    event.preventDefault();
    return false;
  }

  if (mo_number.length === 10) {
    if (emailId.match(emailVld)) {
      if (psw === psw_repeat) {
        let userObj = {
          uname: uname,
          gender: gender,
          birthdate: birthdate,
          mo_number: mo_number,
          emailId: emailId,
          psw: psw,
          psw_repeat: psw_repeat,
        };

        let findAll = localStorage.getItem("userData")
          ? JSON.parse(localStorage.getItem("userData"))
          : [];


        // if (
        //   findAll.some(function (data) {
        //     return data.mo_number === userObj.mo_number;
        //   })
        // ) {
        //   alert("already save this mobile number use different mobile number");
        //   event.preventDefault();
        //   return;
        // }

        // if (
        //   findAll.some(function (data) {
        //     return data.emailId === userObj.emailId;
        //   })
        // ) {
        //   alert("already savethis email use different email id");
        //   event.preventDefault();
        //   return;
        // } 

          findAll.push(userObj);
          let data = JSON.stringify(findAll);
          localStorage.setItem("userData", data);
          window.open("user_info.php","_blank");
          // window.location.href = "../login.php";


      } else {
        alert("password does not match");
        event.preventDefault();
        return false;
      }
    } else {
      alert("Please enter valid email id");
      event.preventDefault();
      return false;
    }
  } else {
    alert("Please Number must be 10 degits only");
    event.preventDefault();
    return false;
  }
}

// document.getElementById("register").addEventListener("click", userRegistration);


// window.location.href="url"; // Simulates normal navigation to a new page
// window.location.replace("url"); // Removes current URL from history and replaces it with a new URL
// window.location.assign("url"); // Adds new URL to the history stack and redirects to the new URL

// window.history.back(); // Simulates a back button click
// window.history.go(-1); // Simulates a back button click
// window.history.back(-1); // Simulates a back button click
// window.navigate("page.php"); // Same as window.location="url"

// ------------------------------------------login page----------------------------------------- //


// findAll.push(userObj);
// let data = JSON.stringify(findAll);
// localStorage.setItem("userData", data);
// window.open("login.php");

// ---------------------------------Update Recored------------------------------------ //




