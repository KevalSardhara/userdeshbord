<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/registreation.css" />
  </head>
  <body>
    <div
      class="card border-5"
      style="
        width: 50rem;
        margin: 20px auto;
        padding: 5px;
        background-color: rgb(230, 228, 225);
      "
    >
      <form>
        <div class="container">
          <h1>Update User Data</h1>
          <hr />
          <label for="uname"><b>User Name</b></label>
          <input
            type="text"
            placeholder="Enter Uname"
            name="uname"
            value=""
            id="update_uname"
            required
          />
          <div>
            <input type="radio" name="update_gender" id="update_male" required />
            <label for="gender"><b>Male</b></label>

            <input type="radio" name="update_gender" id="update_female" required />
            <label for="gender"><b>Female</b></label>
          </div>
          <br />

          <div>
            <label for="birthdate"><b>Birthdate</b></label>
            <input type="date" name="update_birthdate" id="update_birthdate" required />
          </div>

          <div>
            <label for="MoNumber"><b>Mobile Number</b></label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              name="update_mo_number"
              id="update_mo_number"
              onkeypress="return isNumber(event)"
              required
            />
          </div>

          <label for="email"><b>Email</b></label>
          <input
            type="text"
            placeholder="Enter Email"
            name="update_email"
            id="update_email"
            required
          />

          <button
            type="submit"
            class="registerbtn btn btn-success"
            id="update_register"
            onclick="return user_update(event)"
          >
            Update
          </button>
          <button
            id="update_cancle"
            type="cancle"
            class="registerbtn"
            onclick="return update_cancle()"
          >
            Cancle
          </button>
        </div>
      </form>
    </div>
    <script src="./js/update.js"></script>
  </body>
</html>
