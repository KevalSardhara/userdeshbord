<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/todo.css">

</head>
<body>
  <main>
    <div class="fream">
      <div class="container mt-5 col-6">
        <div class="input">
            <input id="inpAddBtn" type="text" class="form-control" placeholder="Chapter Name" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button id="adbtn" class="btn btn-outline-success" type="button" id="button-addon2">Add</button>
        </div>
        <ul id="listItm" class="list-group">
            <li class="list-group-item d-flex justify-content-between" >
                <input type="checkbox" name="chakelist" class="chakelist" onclick="right_list(this)">
                    <h3 class="flex-grow-1">Chapter 1</h3>
                    <button class="btn btn-warning mx-3" type="button" onclick="editList(this)">Edit</button>
                    <button class="btn btn-danger" type="button" onclick="removeList(this)">Remove</button>
            </li>
        </ul>
    </div>
    </div>
    
</main>
<div class="fream1"><a href="./user_Info.php">go to previous page</a></div>
<script src="./js/script.js"></script>
</body>
</html>