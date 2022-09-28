let ad_btn = document.getElementById("adbtn");
ad_btn.addEventListener("click",clickAddBtn);


let list_Item = document.getElementById("listItm");

function clickAddBtn(e){
    



    if(list_Item.children[0].innerHTML == "<h3>Nathing is not Available List! So Creat Now!</h3>"){
        list_Item.children[0].remove();
    }



    let currentBtn = e.currentTarget;

    let preSib = ad_btn.previousElementSibling;
    let preSibValue = preSib.value;


    // if(preSibValue == ""){
    //     alert("Please Fill up The Value");
    // }

    let creatEle = document.createElement("li");
    creatEle.classList = "list-group-item d-flex justify-content-between";
    creatEle.innerHTML = `
        <input type="checkbox" name="chakelist" class="chakelist">
        <h3 class="flex-grow-1">${preSibValue}</h3>
        <button class="btn btn-warning mx-3" type="button" onclick="editList(this)">Edit</button>
        <button class="btn btn-danger" type="button" onclick="removeList(this)">Remove</button>`;
    // creatEle.children[0].innerHTML = preSibValue;
    list_Item.appendChild(creatEle);

    let inp_Add_Btn = document.getElementById("inpAddBtn");
    inp_Add_Btn.value = "";


}

function removeList(remove_List){
    
    list_Item = document.getElementById("listItm");
    // console.log(remove_List.parentElement);
    remove_List.parentElement.remove();

    // list_Item = document.getElementById("listItm");
    // console.log(list_Item.children.length <= 0);

    if(list_Item.children.length <= 0){
        let creatCheak = document.createElement("li");
        creatCheak.classList = "list-item d-flex justify-content-between";
        creatCheak.innerHTML = "<h3>Nathing is not Available List! So Creat Now!</h3>";
        creatCheak.style.color = "red";
        // console.log(creatCheak);
        list_Item.appendChild(creatCheak);
    }
    
}

function editList(e){
    if(e.textContent == "Done"){
        e.textContent = "Edit";
        e.className = "btn btn-warning mx-3";
      
        let cur_Done = e.previousElementSibling.value;
        console.log(e.previousElementSibling.textContent);
        let creat_h3 = document.createElement("h3");
        creat_h3.className = "flex-grow-1";
        
        creat_h3.innerHTML = cur_Done;
        e.parentElement.replaceChild(creat_h3, e.previousElementSibling);
        


    }
    else{
        e.textContent = "Done";
        e.className = "btn btn-success mx-3";
        console.log(e.addEventListener);
        let edit_List = e.previousElementSibling.textContent;
        let creatInput = document.createElement("input");
        creatInput.type = "text";
        creatInput.className = "form-control";
        creatInput.placeholder = "Edit Chapter Name";
        creatInput.innerHTML = edit_List;
        e.parentElement.replaceChild(creatInput, e.previousElementSibling);
    }

}


function right_list(e){
    let ch = document.querySelector(".flex-grow-1");
    if(e.checked === true){
        ch.style.textDecorationLine = "line-through";
    }
    else{
        ch.style.textDecorationLine = "none";
    }
}



