<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/login.css" />
  </head>
  <body style="background-color: rgb(230, 228, 225)">
    <div
      class="card border-5"
      style="
        width: 35rem;
        margin: 150px auto;
        padding: 20px;
        background-color: rgb(230, 228, 225);
      "
    >
      <h2 class="text-center">Login Form</h2>
      <form action="" method="">
        <div class="container">
          <label for="email"><b>Email Address</b></label>
          <input
            id="login_email"
            type="email"
            placeholder="Enter Email Address"
            name="email"
            required
            />
            <label for="psw"><b>Password</b></label>
            <input
            type="password"
            id="login_psw"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button id="login_page" type="submit" onclick="return login_form(event)">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div class="container" style="background-color: #f1f1f1">
          <span>

            If you have no account so
            <a href="./registreation.php" class="text-decoration-underline" style="color: #0000ff">create account.</a>
          </span>
            <span class="" style="margin-left: 2.5rem;">Forgot <a href="./forgot_psw.php" onclick="forgot(event)">password?</a></span>
        </div>
      </form>
    </div>

    <script src="./js/login.js"></script>

  </body>
</html>
