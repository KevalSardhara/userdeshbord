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
          <h1>Registreation</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>
          
          <label for="uname"><b>User Name</b></label>
          <input type="text" placeholder="Enter Uname" name="uname" value=""id="uname" required>
            <div>
              <input type="radio" name="gender" id="male" required>
              <label for="gender"><b>Male</b></label>
    
              <input type="radio" name="gender" id="female" required>
              <label for="gender"><b>Female</b></label>
            </div>
            <br>

            <div>
              <label for="birthdate"><b>Birthdate</b></label>
              <input type="date" name="birthdate" id="birthdate" required>
            </div>
            
            <div>
              <label for="MoNumber"><b>Mobile Number</b></label>
              <input type="text" placeholder="Enter Mobile Number" name="mo_number" id="mo_number" onkeypress="return isNumber(event)" required>
            </div>

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required>
          
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
          
          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" onkeypress="return isValid(event)" id="psw_repeat" required>
          <hr>
          
          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          <button type="submit" class="registerbtn btn btn-success" id="register" onclick="return userRegistration(event)">Register</button>
        </div>
        
        <div class="container signin">
          <p>Already have an account? <a href="./login.php">Sign in</a>.</p>
        </div>
      </form>
      
    </div>
  <script src="./js/registreation.js"></script>
</body>
</html>