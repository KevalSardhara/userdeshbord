<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/registreation.css">
</head>
<body>
    
  <div
  class="card border-5"
  style="
    width: 50rem;
    margin: 150px auto;
    padding: 20px;
    background-color: rgb(230, 228, 225);
  "
>
<form>
  <div class="container">
          <h1>Forgot Password</h1>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="forgot_psw">
          
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" onkeypress="return isValid(event)" id="forgot_psw_repeat" >
          <hr>
          
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn btn btn-success" id="forgot_register" onclick="return forgot_psw(event)">Save Password</button>

          <button type="cancle" class="registerbtn btn btn-success" id="forgot_cancle" onclick="forgot_psew_update_cancle(event)">Cancle</button>
        </div>

      </form>
      
    </div>
  <script src="./js/forgot_psw.js"></script>
  <!-- <script src="./js/update.js"></script> -->

</body>
</html>