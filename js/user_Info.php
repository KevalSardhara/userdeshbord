<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

<link rel="stylesheet" href="./css/user_info.css" />
  </head>

  <body>
    <div class="container1">
      <button
        id="logout"
        type="submit"
        class="registerbtn btn btn-success"
        id="register"
        onclick="return log_out()"
      >
        Log out
      </button>
    </div>
<!-- -------------------------------------- -->
  <div class="deshbord">
    <div class="left">
      <div class="sidebar">
        <a href="./todo.php">TODO</a>
        <a href="./forgot_psw.php">Foegot Password</a>
        <!-- <a href="#home">Add Task</a>
        <a href="#news">Mark-UnMark Task</a>
        <a href="#contact">Update Task</a>
        <a href="#about">Delete Task</a>
        <a href="#about">List of Complate/Uncomplate task</a> -->

        <a class="style" href="#">
          <h3><span id="temperature"></span><br>
            <span id="description"></span><br>
            <span id="location"></span>
          </h3>
        </a>
        <a class="style" href="#">
          <img style="width: 300px; height:250px;" id="img" src="" alt="">
        </a>
        <a class="style" href="#">
          <h3>Time : <span id="time"></span></h3>
          </h3>
        </a>
      </div>
    </div>
  <!-- -------------------------------------- -->
      <div class="right">


    <div id="container" class="container">
      <h1>User Information</h1>
      <hr />
        <span>
          <div>
            <label for="uname"><b>User Name : </b></label>
            <label for="uname"><b id="duname"></b></label>
          </div>
          <br>
          <div>
            <label for="gender"><b>Gender : </b></label>
            <label for="gender"><b id="dgender"></b></label>
          </div>
          <br>
          <div>
            <label for="birthdate"><b>Birthdate : </b></label>
            <label for="birthdate"><b id="dbirthdate"></b></label>
          </div>
          <br>
    
          <div>
            <label for="MoNumber"><b>Mobile No. : </b></label>
            <label for="MoNumber"><b id="dmNo"></b></label>
          </div>
          <br>
          <div>
            <label for="email"><b>Email : </b></label>
            <label for="email"><b id="demail"></b></label>
          </div>
          <br>
    
        </span>
      <hr />
      <button
        id="update"
        type="submit"
        class="registerbtn btn btn-success"
        onclick="return update_record()"
      >
        Update
      </button>
      <button
        id="cancle"
        type="cancle"
        class="registerbtn"
        onclick="return cancle()"
      >
        Cancle
      </button>

    </div>
    <div id="display" >
    <div class="container">
  <form>
            <h1>Update User Data</h1>
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
        
            <button type="submit" class="registerbtn btn btn-success" id="register" onclick="return userRegistration(event)">update</button>
          </div>
        </form>
        
      </div>

      </div>
  </div>
      
</div>
    <script src="./js/user_info.js"></script>
  </body>
</html>
